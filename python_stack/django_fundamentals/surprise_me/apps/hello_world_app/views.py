from django.shortcuts import render, redirect
from random import shuffle
def index(request):
	
	print "Hello world"
	return render(request, 'hello_world_app/index.html')

def surprise(request):
	lengtharr = int(request.POST['number'])
	arr = ["bad","easy","lol","Hurt","gay","code","hate","kill","ice","fire","icecream","hangman","destroy","computer","book","dictionary","technology","power","thunder","controller","dexterity","keyboard","thunderous","blizzard","hazardous","algorithm","destruction","operation","assignment","despicable"]
	shuffle(arr)
	newarr = []
	for i in range (0,lengtharr):
		newarr.append("<p>{}</p>".format(arr[i]))
	print newarr	
	context = {
	'result': newarr
	}
	print request.POST['number']	
	return render(request, 'hello_world_app/results.html', context)