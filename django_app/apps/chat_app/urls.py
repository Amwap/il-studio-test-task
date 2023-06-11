from django.urls import path
from apps.chat_app.views import RoomListView

urlpatterns = [
    path('chat/room/list/', RoomListView.as_view()),
]