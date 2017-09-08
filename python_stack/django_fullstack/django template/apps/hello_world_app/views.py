from django.shortcuts import render

def index(request):
	print "Hello world"
	return render(request, 'hello_world_app/index.html')