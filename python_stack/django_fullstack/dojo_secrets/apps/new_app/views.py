from django.shortcuts import render, redirect
from .models import *
import bcrypt
import datetime

def index(request):
	print "Im in index"
	if 'user' in request.session:
		return redirect('/secrets/regular')
	elif 'user' not in request.session:
		return render(request,'new_app/index.html')
	
	
def registration(request):
	if request.method == "POST":
		request.session['errors'] = []

		print "Im in post"	
		form_data = request.POST
		errors = User.objects.registration(form_data)
		duplicate = User.objects.filter(email = form_data['email'])
		if duplicate:
			errors.append('The email provided has already been registered')
		if not errors:
			password = str(form_data['password'])
			hashed_pw = bcrypt.hashpw(password, bcrypt.gensalt())
			print hashed_pw
			x = User.objects.create(first_name = form_data['firstname'], last_name= form_data['lastname'], email = form_data['email'], password = hashed_pw)
			request.session['user'] = x.id
			return redirect('/')
		else:
			request.session['errors'] = errors
			return redirect('/')
	return redirect('/')		

def login(request):
	if request.method == "POST":
		request.session['errors'] = []
		form_data = request.POST
		errors = User.objects.validate(form_data)
		request.session['errors'] = errors

		if not errors:
			varlogin = User.objects.filter(email = form_data['email']).first()
			if varlogin:
				password = str(form_data['password'])
				db_password = str(varlogin.password)
				hashed_pw = bcrypt.hashpw(password, db_password)
				if hashed_pw == varlogin.password:
					request.session['user'] = varlogin.id
					return redirect('/secrets/regular')
				else:
					request.session['errors'].append("The login and or password is incorrect")
					return redirect('/')

def secrets(request,loc):
	print loc
	if str(loc) == "regular":
		if 'errors' in request.session:
			request.session.pop('errors')
	user = User.objects.filter(id = request.session['user']).first()

	if user:
		# post = Secrets.objects.raw("select * from new_app_secrets")
		# works post = Secrets.objects.raw("select sec.id, sec.content, count(like.id) as num_likes from new_app_secrets as sec left join new_app_likes as like on like.secret_id = sec.id group by sec.id, sec.content")
		post = Likes.objects.raw("""select sec.id, sec.content, user.id as userid, count(like.id) as num_likes, 
			strftime('%H hour, %M mins',cast((julianday('now')-julianday(sec.created_at))as real),'12:00') as dateage
						from new_app_secrets as sec 
						left join new_app_likes as like 
						on like.secret_id = sec.id 
						left join new_app_user as user
						on sec.user_id = user.id 
						group by sec.id, sec.content
						order by sec.created_at desc
						limit 10""")
		# alljoined = Likes.objects.raw("select from new_app_likes as like  join new_app_secrets as sec on like.secret_id = sec.id join new_app_user as user on sec.user_id = user.id")
		
		userliked = Likes.objects.filter(user_id = user.id)
		liked_posts = []
		for i in userliked:
			liked_posts.append(i.secret_id)
		print liked_posts	

		context = {
		'first_name': user.first_name,
		'post': post,
		'liked_posts': liked_posts,
		'datetime':datetime.datetime.now()
		}
		# request.session['errors'] = []
		return render(request,'new_app/secrets.html',context)
	else: 
		return redirect('/')	

def newsecret(request):
	if request.method == "POST":
		Secrets.objects.create(content = request.POST['secret'], user_id = request.session['user'])
	return redirect('/secrets/regular')

def like(request, secid, id2):

	Likes.objects.create(user_id = request.session['user'], secret_id =secid)
	if id2 == "secrets":
		return redirect('/')
	elif id2 == "popular":
		return redirect('/popular')

def logout(request):
	if request.method == "POST":
		request.session.flush()
	return redirect('/')

def delete(request,id):
	x = Secrets.objects.get(id=id)
	if request.session['user'] == x.user_id:
		x.delete()
	else:
		request.session['errors'] = []
		request.session['errors'].append("Cannot delete a secret you did not post")	
	return redirect('/secrets/delete')


def popular(request):
	user = User.objects.filter(id = request.session['user']).first()
	if user:
		post = Likes.objects.raw("""select sec.id, sec.content, user.id as userid, count(like.id) as num_likes, sec.created_at as dateage
							from new_app_secrets as sec 
							left join new_app_likes as like 
							on like.secret_id = sec.id 
							left join new_app_user as user
							on sec.user_id = user.id 
							group by sec.id, sec.content
							order by num_likes desc
							""")
		userliked = Likes.objects.filter(user_id = user.id)
		liked_posts = []
		for i in userliked:
			liked_posts.append(i.secret_id)
		print liked_posts
		
		context = {
		'first_name': user.first_name,
		'post': post,
		'liked_posts': liked_posts,
		}
		# for i in post:
			# print datetime.datetime.now()-i.created_at
		return render(request,'new_app/popular.html',context)
	else:
		return redirect('/')




