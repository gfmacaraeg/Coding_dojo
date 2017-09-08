from django.shortcuts import render, redirect
import random
from datetime import datetime
import time

def index(request):
	if 'gold' not in request.session:
		request.session['gold'] = 0
		request.session['activities'] = []
	return render(request, 'hello_world_app/index.html')

def process_money(request):
	net = 0
	format = "%y/%m/%d %I:%M %p"
	if request.method == 'POST':
		if request.POST['building'] == 'farm':
			net = random.randrange(10,21)
			request.session['gold'] = request.session['gold'] + net
			request.session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the farm! ({})</p>".format(net, datetime.today().strftime(format))]
		elif request.POST['building'] == "cave":
			net = random.randrange(5,11)
			request.session['gold'] = request.session['gold'] + net
			request.session['activities'][0:0]= ["<p id ='"'green'"''>Earned {} golds from the cave! ({})</p>".format(net, datetime.today().strftime(format))]
		elif request.POST['building'] == "house":
			net = random.randrange(2,6)
			request.session['gold'] = request.session['gold'] + net
			request.session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the house! ({})</p>".format(net, datetime.today().strftime(format))]
		elif request.POST['building'] == "casino":
			net = random.randrange(-50,51)
			request.session['gold'] += net
			if net >= 0:
				request.session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the casino! ({})</p>".format(net, datetime.today().strftime(format))]
			if net < 0:
				request.session['activities'][0:0] = ["<p id ='"'red'"''>Entered a casino and lost {} golds ... Ouch... ({})</p>".format(net, datetime.today().strftime(format))]	
	return redirect('/')