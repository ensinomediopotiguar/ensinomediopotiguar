from django.shortcuts import render

def novoensinomedio(request):
    return render(request, 'duvidas/novoensinomedio.html')

def pedemeia(request):
    return render(request, 'duvidas/pedemeia.html')