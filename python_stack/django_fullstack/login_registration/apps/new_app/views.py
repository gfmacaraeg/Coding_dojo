from django.shortcuts import render, redirect
from .models import *

def index(request):
	# print "in index",request.session['user']
	if 'user' in request.session:
		return redirect('/welcome')
	elif 'user' not in request.session:	
	
		return render(request,'new_app/index.html')
	

def registration(request):
	if request.method == "POST":
		request.session['errors'] = []
		form_data = request.POST
		errors = User.objects.registration(form_data)
		y = User.objects.filter(email = form_data['email'])
		print "IF THERE IS A DUPLICATE EMAIL", y
		if y:
			errors.append('That email is already registered')
		if errors:
			request.session['errors'] = errors
			return redirect('/')
		else:
			x = User.objects.create(first_name = form_data['firstname'], last_name= form_data['lastname'], email = form_data['email'],password = form_data['password'])
			print "This is x", x, x.first_name
			
			request.session['user'] = x.id
			print "This is registered session number", request.session['user']
			return redirect('/welcome')
	

def login(request):
	if request.method == "POST":
		form_data = request.POST
		check = User.objects.validate(form_data)
		if check:
			request.session['errors'] = check
			return redirect('/')
		else:	
			x = User.objects.get(email = form_data['email'],password = form_data['password'])
			request.session['user'] = x.id
			return redirect('/welcome')
def welcome(request):
	print "This is the welcome session user", request.session['user']
	new = User.objects.filter(id= request.session['user'])
	for i in new:
		print "This is the new query result for welcome", i.id
	context = {
		'id': new
		}
	return render(request,'new_app/welcome.html',context)

def logout(request):
	if request.method == "POST":
		request.session.pop('user')
	return redirect('/')




