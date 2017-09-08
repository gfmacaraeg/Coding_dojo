from flask import Flask, render_template, request, redirect, url_for, flash
app = Flask(__name__)
app.secret_key ='whataeraseasrsdkjflseiof'
@app.route('/')
def index():
	return render_template('index.html')

@app.route('/user', methods=['POST'])
def post_info():
	# if len(request.form['name']) > 0 and len(request.form['comment']) > 0:

	if len(request.form['comment']) > 120:
		flash("You can only enter up to 120 characters!")
		return redirect('/')
	elif len(request.form['name']) < 1:
		flash("Name cannot be blank!")
		return redirect('/')
	elif len(request.form['comment']) > 120 and len(request.form['name']) < 1:
		flash("name cannot be blank and comment can only be up to 120 characters")
		return redirect('/')
	else:
		name = request.form['name']
	   	location = request.form['location']
	   	language = request.form['language']
	   	comment = request.form['comment']
	   	print name, location, language, comment
	return render_template('result.html',name = request.form['name'],location = request.form['location'],language =request.form['language'],comment =request.form['comment'])	

app.run(debug=True)