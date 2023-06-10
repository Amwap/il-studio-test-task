from rest_framework import generics
from apps.chat_app.models import Message
from apps.chat_app.serializers import MessageSerializer

class ChatRoomView(generics.ListCreateAPIView):
    queryset = Message.objects.all() 
    serializer_class = MessageSerializer
    ordering = ('-timestamp',)