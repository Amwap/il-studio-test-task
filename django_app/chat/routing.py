from channels.routing import ProtocolTypeRouter, URLRouter
# import app.routing
from django.urls import re_path
from apps.chat_app.consumers import ChatRoomConsumer

websocket_urlpatterns = [
    re_path(r'^ws/chatroom/(?P<room_id>[^/]+)/$', ChatRoomConsumer.as_asgi()),
]
# the websocket will open at 127.0.0.1:8000/ws/<room_name>
application = ProtocolTypeRouter({
    'websocket':
        URLRouter(
            websocket_urlpatterns
        )
}) 
