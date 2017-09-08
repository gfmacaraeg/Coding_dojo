from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/user', methods=['POST'])
def post_info():
	name = request.form['name']
   	location = request.form['location']
   	language = request.form['language']
   	comment = request.form['comment']
   	print name, location, language, comment
	return render_template('result.html',name = request.form['name'],location = request.form['location'],language =request.form['language'],comment =request.form['comment'])	

app.run(debug=True)