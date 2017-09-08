from django.shortcuts import render

def index(request):
	print "Hello world"
	return render(request, 'hello_world_app/index.html')

def testimonials(request):
	print "im in testimonials"
	return render(request, 'hello_world_app/testimonials.html')

def about(request):
	print "im in about"
	return render(request, 'hello_world_app/about.html')

def projects(request):
	print "im in projects"
	return render(request, 'hello_world_app/projects.html')
