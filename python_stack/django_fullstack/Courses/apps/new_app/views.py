from django.shortcuts import render,redirect
from .models import Courses, Description


def index(request):
	# allcourse = Courses.objects.all()
	# desc = for course Courses.objects.all().prefetch_related()	# course__isnull=True
	# joined = Courses.objects.all().select_related('')
	desc = Courses.objects.raw('select * from new_app_courses as c left join new_app_description as d on c.id = d.course_id')
	context = {
	'info': desc
	}
	# for i in desc:
	# 	print i.id, i.name, i.date_added, i.content

	return render(request,'new_app/index.html', context)


def addcourse(request):
	if request.method == "POST":
		name = Courses.objects.create(name = request.POST['name'])
		desc = Description.objects.create(content = request.POST['desc'],course_id = name.id)

	return redirect('/')

def remove(request, id):
	varid = int(id)
	query = """select c.id,c.name, d.content from new_app_courses as c left join 
	new_app_description as d on c.id = d.course_id where c.id ={}""".format(varid)
	str(query)
	x = Courses.objects.raw(query)
	# for i in x:
	# 	print i.name, i.content
	context = {
	'result': x
	}
	return render(request,'new_app/remove.html',context)

def delete(request,id):
	if request.method == "POST":
		print "inside post"
		varid = int(id)

		# query = "select * from new_app_courses as c left join new_app_description as d on c.id = d.course_id where c.id ={}".format(varid)

		x = Courses.objects.get(id=varid).delete()
		print x
	return redirect('/')	









