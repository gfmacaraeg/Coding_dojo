from django.shortcuts import render, redirect
from .models import Username

def index(request):
	if 'result' in request.session:
		context = {
		'error': "incorrect"
		}
		request.session.pop('result')
	else:
		context = {
		'error': "none"
		}
	print context	
	return render(request,'new_app/index.html',context)
# Create your views here.

def user(request):
	if request.method == "POST":
		form_data = request.POST
		check = Username.objects.register(form_data)
		if check:
			request.session['result'] = "error"
			return redirect('/')
		else: 
			
			print "success"
			x = Username.objects.create(name=form_data['username'])
			return render(request,'new_app/success.html')
		

	