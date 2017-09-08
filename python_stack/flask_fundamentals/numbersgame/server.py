from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'very secret'

def generaterandom():
	randnum = random.randrange(0,101)
	return randnum

@app.route('/')
def index():
	session['random'] = generaterandom()
	print session['random']
	return render_template('index.html')

@app.route('/random', methods=['POST'])
def randomgen():
	result = ""
	try:
	 	int(request.form['guess'])
		if type(int(request.form['guess'])) is not int:
			result = "wrong"
		elif int(request.form['guess']) == int(session['random']):
			result = "{} was the number! You guessed {}".format(session['random'],request.form['guess'])
			result = "correct"
		elif int(request.form['guess']) > int(session['random']):
			result = "high"
		elif int(request.form['guess']) < int(session['random']):
			result = "low"
	except ValueError:
	 	result = "wrong"
		# result = "{} was the number! You guessed {}".format(session['random'],request.form['guess'])
	return render_template('index.html',result =result)

@app.route('/new', methods=['POST'])
def again():
	session.pop('random')
	return redirect('/')
app.run(debug=True)