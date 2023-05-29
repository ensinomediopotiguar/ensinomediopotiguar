from django.shortcuts import render

def documentos(request):
    return render(request, 'normativas/normativas.html')
