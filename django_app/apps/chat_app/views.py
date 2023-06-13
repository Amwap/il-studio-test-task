from apps.chat_app.models import ChatRoom, Message
from apps.chat_app.serializers import ChatRoomSerializer, MessageSerializer, UserSerializer
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response




class UserView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        data = UserSerializer(self.request.user).data
        return Response(status=200, data=data)

class RoomMetaView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request, room_id):
        room = ChatRoom.objects.get(id=room_id)
        data = ChatRoomSerializer(room).data
        return Response(status=200, data=data)
    
class RoomListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, )
    queryset = ChatRoom.objects.all() 
    serializer_class = ChatRoomSerializer
    
    
class RoomCreateView(generics.CreateAPIView):
    # permission_classes = (IsAuthenticated, )
    queryset = ChatRoom.objects.all() 
    serializer_class = ChatRoomSerializer
    