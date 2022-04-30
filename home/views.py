from django.contrib.auth.decorators import login_required  # new
from django.shortcuts import render

# Create your views here.

def index(request):
    """ A view to return the index page """

    return render(request, 'home/index.html')
