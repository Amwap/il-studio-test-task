from django.urls import path
from apps.chat_app.views import RoomListView, RoomCreateView, UserView

urlpatterns = [
    path('user/me/', UserView.as_view()),
    
    path('chat/room/list/', RoomListView.as_view()),
    path('chat/room/create/', RoomCreateView.as_view()),
]