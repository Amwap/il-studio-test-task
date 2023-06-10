from django.urls import path
from apps.chat_app.views import ChatRoomView

urlpatterns = [
    path('chatroom/', ChatRoomView.as_view()),
]