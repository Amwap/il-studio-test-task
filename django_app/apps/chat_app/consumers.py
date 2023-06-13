import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from apps.chat_app.models import Message, ChatRoom
from django.contrib.auth.models import User
from apps.chat_app.serializers import UserSerializer, ChatRoomSerializer, MessageSerializer

class ChatRoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        chat_room = ChatRoom.objects.get(id=self.room_id)
        
        self.room_group_name = 'chat_%s' % self.room_id
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()
        
        message_list = Message.objects.filter(room=chat_room) 
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'room_meta',
                'room_meta': ChatRoomSerializer(chat_room).data,
                'message_list': MessageSerializer(message_list[:10], many=True).data
            }
        )
        
        
    def disconnect(self, close_code):
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        chat_room = ChatRoom.objects.get(id=self.room_id)
        chat_room.members.remove()
        
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        user = text_data_json['user']
        text = text_data_json['text']
        self.room_id = self.scope['url_route']['kwargs']['room_id']
        chat_room = ChatRoom.objects.get(id=self.room_id)
        user = User.objects.get(id=user['id'])
        message = Message.objects.create(
            room = chat_room,
            user = user,
            content = text
        )

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message':  MessageSerializer(message).data,
                'user': UserSerializer(user).data
            }
        )

    def chat_message(self, event):
        self.send(text_data=json.dumps(event))
        
    def room_meta(self, event):
        self.send(text_data=json.dumps(event))
