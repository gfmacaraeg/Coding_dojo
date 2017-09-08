from django.shortcuts import render, redirect
from .models import *

def index(request):
	if 'user' in session:
		return redirect('/books')

	return render(request,'new_app/index.html')

def registration(request):
	if request.method =="POST":
		form_data = request.POST
		x = User.objects.registration(form_data)
		request.session['errors'] = x
	


	return redirect('/')	