from apps.chat_app.views import (MessageListView, RoomCreateView, RoomListView,
                                 RoomMetaView, UserView)
from django.urls import path

urlpatterns = [
    path('user/me/', UserView.as_view()),

    path('chat/room/list/', RoomListView.as_view()),
    path('chat/room/create/', RoomCreateView.as_view()),
    
    path('room/meta/<slug:room_id>/', RoomMetaView.as_view()),
    
    path('message/list/<slug:room_id>/', MessageListView.as_view()),
]
