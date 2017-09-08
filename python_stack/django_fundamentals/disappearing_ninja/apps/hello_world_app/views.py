from django.shortcuts import render, redirect

def index(request):
	return render(request, 'hello_world_app/index.html')

def ninja(request):
	context = {'ninja' : "tmnt.png"}
	
	return render(request, 'hello_world_app/ninja.html', context)

def color(request, id):
	# image = id
	if id == "blue":
		image = "leonardo.jpg"
	elif id == "orange":
		image ="michelangelo.jpg"
	elif id == "red":
		image ="raphael.jpg"
	elif id	== "purple":
		image ="donatello.jpg"
	else:
		image ="notapril.jpg"

	context = {'ninja' : image}
	return render(request, 'hello_world_app/ninja.html', context)