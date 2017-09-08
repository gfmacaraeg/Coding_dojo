from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import time
import re
import md5
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "serseasdfasasdfsdfgdfsasdfdfasdfzsxsadfcvwetassdfdfsdfwaed"

mysql = MySQLConnector(app,'dojosite')

@app.route('/')
def index():
    if 'loggedin' in session and session['loggedin'] == True:
        return render_template('welcome.html')
    else:
        session['valid'] = False
        session['loggedin'] = False
    return render_template('index.html') # pass data to our template

# @app.route('/welcome')
# def welcome():
#     query = "Select * from users where id = :id"
#     data = {
#         'id': session['logged_In']
#     }

#     user = mysql.query_db(query, data)

#     return render_template('welcome.html' user=user)

@app.route('/login', methods=['POST'])
def login():
    email  = request.form['email']
    password  = request.form['password']
    query = "select email, password from users where email = :varemail and password =:varpass"
    data = {
             'varemail': request.form['email'],
             'varpass': request.form['password']
           }
    result = mysql.query_db(query, data)
    print result
    if result:
        session['loggedin'] = True
        return render_template('welcome.html')
    else:
        flash('Incorrect email and password!')
    return redirect('/')


@app.route('/registration' ,methods=['post'])
def register():
    firstname  = request.form['firstname']
    lastname  = request.form['lastname']
    email  = request.form['email']
    password  = request.form['password']
    confirm = request.form['confirm']
    if len(firstname) >1 and len(lastname) >1 and len(email) > 0 and EMAIL_REGEX.match(email) and len(password) > 7 and password == confirm:
        session['loggedin'] = True;
        query = "INSERT INTO users (firstname, lastname, email, password) VALUES (:firstname, :lastname, :email, :password)"
        data = {
                 'firstname': request.form['firstname'],
                 'lastname':  request.form['lastname'],
                 'email': request.form['email'],
                 'password': request.form['password']
               }
        # Run query, with dictionary values injected into the query.
        result = mysql.query_db(query, data)
        print result
        return render_template('welcome.html')
    else:
        session['valid'] = False;
        flash("Invalid format given! Please follow guidelines below:<br>1. First Name - letters only, at least 2 characters and that it was submitted<br>2. Last Name - letters only, at least 2 characters and that it was submitted<br>3. Email - Valid Email format, and that it was submitted<br>4. Password - at least 8 characters, and that it was submitted<br>5. Password Confirmation - matches password")
    return redirect('/')    

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('loggedin')
    return redirect('/')  

app.run(debug=True)