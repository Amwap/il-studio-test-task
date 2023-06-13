# Generated by Django 4.2 on 2023-06-13 21:53

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chat_app', '0005_chatroom_member_count'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chatroom',
            name='member_count',
        ),
        migrations.AddField(
            model_name='chatroom',
            name='members',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='Активные пользователи канала'),
        ),
    ]
