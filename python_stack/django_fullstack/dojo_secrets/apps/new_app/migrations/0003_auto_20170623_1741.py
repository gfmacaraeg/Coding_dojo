# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-23 17:41
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('new_app', '0002_auto_20170623_1739'),
    ]

    operations = [
        migrations.RenameField(
            model_name='likes',
            old_name='secret_id',
            new_name='secret',
        ),
        migrations.RenameField(
            model_name='likes',
            old_name='user_id',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='secrets',
            old_name='user_id',
            new_name='user',
        ),
    ]
