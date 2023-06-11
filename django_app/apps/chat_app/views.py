from rest_framework import generics
from apps.chat_app.models import Message, ChatRoom
from apps.chat_app.serializers import MessageSerializer


class RoomListView(generics.ListCreateAPIView):
    queryset = ChatRoom.objects.all() 
    serializer_class = MessageSerializer
    ordering = ('-timestamp',)