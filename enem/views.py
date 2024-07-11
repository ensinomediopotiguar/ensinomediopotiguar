from django.shortcuts import render

def seliganoenem(request):
    return render(request, 'seliganoenem.html')

def prazos(request):
    return render(request, 'enem/prazos.html')

def depois(request):
    return render(request, 'enem/depois.html')

def dicas(request):
    return render(request, 'enem/dicas.html')

def cursos(request):
    return render(request, 'enem/cursos.html')

def estudecgnt(request):
    return render(request, 'enem/estudecgnt.html')