
# -*- coding: utf-8 -*- 
from __future__ import unicode_literals
from django.db import models
import re
class UserManager(models.Manager):
	def registration(self, form_data):
		errors = []
		if len(form_data['firstname'] ) < 2:
			errors.append('Name cannot be less than 2 characters')
		if len(form_data['lastname'] )< 2:
			errors.append('Last name cannot be less than 2 characters')
		if not re.match(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)' , form_data['email']):
			errors.append('That is not a valid email format')
		if len(form_data['password'] )== 0:
			errors.append('Password is required')
		if len(form_data['password'] )< 8:
			errors.append('Password must be at least 8 characters')
		if form_data['password'] != form_data['confirm']:
			errors.append('Password doesn\'t match')
		return errors

	def validate(self,form_data):
		errors = []
	
		if len(form_data['email']) == 0:
			errors.append('Email cannot be blank')
		if len(form_data['password']) == 0:
			errors.append('password cannot be blank')
		return errors

class User(models.Model):
	first_name = models.CharField(max_length=255)
	last_name = models.CharField(max_length=255)
	email = models.EmailField(max_length=255)
	password = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserManager()