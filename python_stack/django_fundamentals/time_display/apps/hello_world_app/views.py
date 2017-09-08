from django.shortcuts import render, HttpResponse
from datetime import datetime

import time
def index(request):
	format = "%y/%m/%d %I:%M %p"
	context ={
	"date":datetime.now()
	}
	return render(request, 'hello_world_app/index.html',context)