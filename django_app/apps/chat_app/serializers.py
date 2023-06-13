from apps.chat_app.models import ChatRoom, Message
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']
    
class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = ['id', 'name', 'member_count']

class MessageSerializer(serializers.ModelSerializer):
        user = UserSerializer()
        class Meta:
           model = Message
           fields = ('id', 'user', 'content', 'timestamp')
           read_only_fields = ('id', 'timestamp')