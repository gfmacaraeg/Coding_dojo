from __future__ import unicode_literals

from django.db import models

class UserManager(models.Manager):
	def register(self, form_data):
		errors = []
		if len(form_data['username']) < 9:
			errors.append('Username should be greater than 8 characters!')
		if len(form_data['username']) > 26:
			errors.append('Username should be fewer than 26 characters!')
		return errors


class Username(models.Model):

	name = models.CharField(max_length=38)
	date_added = models.DateTimeField(auto_now_add=True)
	objects =  UserManager()
