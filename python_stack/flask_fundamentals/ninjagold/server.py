from flask import Flask, render_template, request, redirect, session
import random
from datetime import datetime
import time
app = Flask(__name__)
app.secret_key ="ssdfasssdfsdfddfgsdfsasdwe"

@app.route('/')

def index():
 
	try:
		session['gold']
	except:
		session['gold'] = 0
		session['activities'] = []
	
	return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def getmoney():
	net = 0
	format = "%y/%m/%d %I:%M %p"
	if request.form['building'] == "farm":
		net = random.randrange(10,21)
		session['gold'] += net
		session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the farm! ({})</p>".format(net, datetime.today().strftime(format))]
		print session['gold']
	elif request.form['building'] == "cave":
		net = random.randrange(5,11)
		session['gold'] += net
		session['activities'][0:0]= ["<p id ='"'green'"''>Earned {} golds from the cave! ({})</p>".format(net, datetime.today().strftime(format))]
		print session['gold']
	elif request.form['building'] == "house":
		net = random.randrange(2,6)
		session['gold'] += net
		session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the house! ({})</p>".format(net, datetime.today().strftime(format))]
		print session['gold']
	elif request.form['building'] == "casino":
		net = random.randrange(-50,51)
		session['gold'] += net
		if net >= 0:
			session['activities'][0:0] = ["<p id ='"'green'"''>Earned {} golds from the casino! ({})</p>".format(net, datetime.today().strftime(format))]
		if net < 0:
			session['activities'][0:0] = ["<p id ='"'red'"''>Entered a casino and lost {} golds ... Ouch... ({})</p>".format(net, datetime.today().strftime(format))]
		print session['gold']
		
	return redirect('/')

app.run(debug=True)