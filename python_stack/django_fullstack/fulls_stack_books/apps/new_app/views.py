from django.shortcuts import render,redirect
from .models import Books


def index(request):
	allbooks = Books.objects.all()
	lengthbooks = len(allbooks)
	context = {
	'books': allbooks,
	'lengthbooks': lengthbooks
	}
		
	return render(request,'new_app/index.html', context)

def newbook(request):
	if request.method == "POST":
		print "im in post"
		varTitle = request.POST['title']
		varCategory = request.POST['category']
		varAuthor = request.POST['author']
		Books.objects.create(title = varTitle, category =varCategory, author = varAuthor)
		
	return redirect('/')	