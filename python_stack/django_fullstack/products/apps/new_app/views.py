from django.shortcuts import render

def index(request):
	print "Im in index"
	return render(request,'new_app/index.html')
# Create your views here.
