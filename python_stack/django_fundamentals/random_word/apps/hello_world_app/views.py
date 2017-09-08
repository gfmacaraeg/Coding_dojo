from django.shortcuts import render,redirect
import string
import random
def index(request):
	if 'attempt' not in request.session:
		request.session['attempt'] = 1
		
	return render(request, 'hello_world_app/index.html')

def generate(request):
	if request.method == "POST":
		request.session['attempt'] = request.session['attempt'] + 1
		random_word = ''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(14)])
		result ={
		'random_word':random_word
		}
		return render(request, 'hello_world_app/index.html', result)
	else:
		return redirect('/')