from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import time
app = Flask(__name__)
app.secret_key = "serseasdfasdfasdfzxsadfcvassdfdfsdfwaed"
mysql = MySQLConnector(app,'friendsdb')
@app.route('/')
def index():
    print 'index session', session
    if 'entered' not in session:
        session['entered'] = []
    return render_template('index.html') # pass data to our template

@app.route('/email', methods=['POST'])
def create():
    format = "%y/%m/%d %I:%M %p"
    string = "<p>{}</p>".format(request.form['email'])
    session['entered'].insert(0, string)
    
    final = ""
    query = "select name from email_address where name = :specific_id"
    data = {'specific_id':request.form['email']}
    result = mysql.query_db(query,data)
    if result:
        final = "invalid"
    else:
        final = "valid"
    
    print 'session', session['entered']
    print result    
    print request.form['email']
    print final
    return render_template('index.html', final = final)

app.run(debug=True)