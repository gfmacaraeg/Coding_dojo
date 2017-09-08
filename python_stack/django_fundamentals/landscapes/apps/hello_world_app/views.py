from django.shortcuts import render

def index(request):
	print "Hello world"
	return render(request, 'hello_world_app/index.html')

def image(request, id):
	result = False
	number = int(id)
	image = ""
	if number > 0 and number < 11:
		image = "snow.jpg"
	elif number > 10 and number < 21:
		image = "desert.jpg"
	elif number > 20 and number < 31:
		image = "forest.jpg"
	elif number > 30 and number < 41:
		image = "vineyard.jpg"	
	elif number > 40 and number < 51:
		image = "tropical.jpg"
	else:
		result = True
	context ={
	'image': image,
	'result': result
	}
	return render(request, 'hello_world_app/result.html', context)	