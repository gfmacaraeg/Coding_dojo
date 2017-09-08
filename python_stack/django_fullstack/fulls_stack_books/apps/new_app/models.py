from __future__ import unicode_literals

from django.db import models

class Books(models.Model):
	title = models.CharField(max_length=38)
	author = models.CharField(max_length=38)
	# published_date = models.DateTimeField()
	category = models.CharField(max_length=38)
	# in_print = models.BooleanField()