from rest_framework import serializers
from apps.chat_app.models import Message, ChatRoom
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']
    

class ChatRoomSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)
    class Meta:
        model = ChatRoom
        fields = ['name', 'members']
        

class MessageSerializer(serializers.ModelSerializer):
        user = UserSerializer()
        class Meta:
           model = Message
           fields = ('id', 'user', 'content', 'timestamp')
           read_only_fields = ('id', 'timestamp')