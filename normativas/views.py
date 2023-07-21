from django.shortcuts import render

def normativas(request):
    return render(request, 'normativas/normativas.html')
