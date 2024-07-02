from django.shortcuts import render

def seliganoenem(request):
    return render(request, 'enem/seliganoenem.html')

def prazos(request):
    return render(request, 'enem/prazos.html')

def posenem(request):
    return render(request, 'enem/posenem.html')

def dicas(request):
    return render(request, 'enem/dicas.html')

def redacao(request):
    return render(request, 'enem/redacao.html')

def conhecaoscursos(request):
    return render(request, 'enem/conhecaoscursos.html')

def teste(request):
    return render(request, 'enem/teste.html')