from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth.models import User


class ChatRoom(models.Model):
    name = models.CharField(_("Название комнаты"), max_length=50)
    members = models.ManyToManyField(User, verbose_name=_("Активные пользователи канала"))
    class Meta:
        verbose_name = _('Комната')
        verbose_name_plural = _('Список комнат')
        
    def __str__(self) -> str:
        return self.name


class Message(models.Model):
    user = models.ForeignKey(User, verbose_name=_("Пользователь"), on_delete=models.CASCADE)
    room = models.ForeignKey(ChatRoom, verbose_name=_("Чат комната"), on_delete=models.CASCADE)
    content = models.TextField(verbose_name=_("Текст сообщения"))
    timestamp = models.DateTimeField(auto_now_add=True, verbose_name=_("Время"))

    class Meta:
        ordering = ('timestamp',)
        verbose_name = _('Сообщение')
        verbose_name_plural = _('Список сообщений')