from rest_framework import generics
from apps.chat_app.models import Message, ChatRoom
from apps.chat_app.serializers import MessageSerializer, ChatRoomSerializer
from rest_framework.permissions import IsAuthenticated


class RoomListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = ChatRoom.objects.all() 
    serializer_class = ChatRoomSerializer
    
class RoomCreateView(generics.CreateAPIView):
    # permission_classes = (IsAuthenticated, )
    queryset = ChatRoom.objects.all() 
    serializer_class = ChatRoomSerializer
    