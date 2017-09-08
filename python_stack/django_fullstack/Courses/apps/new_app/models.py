from __future__ import unicode_literals

from django.db import models

class Courses(models.Model):
	name = models.CharField(max_length=38)
	date_added = models.DateTimeField(auto_now_add=True)

	# def as_dict(self):
	# 	return {
	# 		'course': self.course,
	# 		'data_added': self.date_added
	# 	}

	# def __str__(self):
	# 	return "id: {} course: {}, date_added: {}".format(
	# 		self.id,
	# 		self.course,
	# 		self.date_added,
	# 	)

class Description(models.Model):
	content = models.TextField()
	course =  models.OneToOneField(Courses,on_delete=models.CASCADE)