from __future__ import unicode_literals

from django.db import models

class Products(models.Model):
	name = models.CharField(max_length=38)
	description = models.TextField()
	weight = models.DecimalField(max_digits=5, decimal_places=2)
	price = models.DecimalField(max_digits=10, decimal_places=2)
	cost = models.DecimalField(max_digits=10, decimal_places=2)
	category =  models.CharField(max_length=38)

class Books(models.Model):
	title = models.CharField(max_length=38)
	author = models.CharField(max_length=38)
	published_date = models.DateTimeField()
	category = models.CharField(max_length=38)
	in_print = models.BooleanField()