from django.shortcuts import render, redirect, HttpResponse

def index(request):
	if 'attempt' not in request.session:
		request.session['attempt'] = 1
		request.session['name'] = ""
		request.session['location'] = ""
		request.session['language'] = ""
		request.session['comment'] = ""
	elif request.session['attempt'] > 0:
		request.session['attempt'] =request.session['attempt'] + 1
	return render(request, 'hello_world_app/index.html')

def user(request):
	if request.method == "POST":
		request.session['name'] = request.POST['name']
		request.session['location'] = request.POST['location']
		request.session['language'] = request.POST['language']
		request.session['comment'] = request.POST['comment']
		return redirect('/result')

def result(request):
	return render(request, 'hello_world_app/result.html')

def again(request):
	print "im in reset"
	if request.method == "GET":
		request.session.pop('name')
		request.session.pop('location')
		request.session.pop('language')
		request.session.pop('comment')
	return redirect('/')