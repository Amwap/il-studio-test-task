# Generated by Django 4.2 on 2023-06-12 23:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chat_app', '0003_alter_chatroom_options_alter_message_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='room',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='chat_app.chatroom', verbose_name='Чат комната'),
            preserve_default=False,
        ),
    ]
