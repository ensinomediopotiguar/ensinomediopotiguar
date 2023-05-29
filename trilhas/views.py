from django.shortcuts import render

def trilhas(request):
    return render(request, 'trilhas/trilhas.html')
