from django.shortcuts import render

def formacoes(request):
    return render(request, 'formacoes/formacoes.html')