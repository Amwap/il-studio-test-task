from django.contrib import admin
# Register your models here.
from apps.chat_app.models import ChatRoom, Message
from django.contrib import admin


@admin.register(ChatRoom)
class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', )
    
@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'room', 'content', 'timestamp')
    