from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth.models import User


class ChatRoom(models.Model):
    name = models.CharField(_("Название комнаты"), max_length=50)
    members = models.ManyToManyField(User, verbose_name=_("Участники"))

class Message(models.Model):
    user = models.ForeignKey(User, verbose_name=_("Пользователь"), on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('timestamp',)