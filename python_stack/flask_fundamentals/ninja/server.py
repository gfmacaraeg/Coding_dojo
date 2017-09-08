from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/ninja')
def ninja():
	return render_template('ninja.html', image ="../static/ninjas/tmnt.png")

@app.route('/ninja/<id>')
def color(id):
	print id
	if id == "blue":
		image = "../static/ninjas/leonardo.jpg"
	elif id == "orange":
		image ="../static/ninjas/michelangelo.jpg"
	elif id == "red":
		image ="../static/ninjas/raphael.jpg"
	elif id	== "purple":
		image ="../static/ninjas/donatello.jpg"
	elif len(id) == 0:
		image ="../static/ninjas/tmnt.png"
	else:
		image ="../static/ninjas/notapril.jpg"
	return render_template('ninja.html', image =image)

app.run(debug=True)