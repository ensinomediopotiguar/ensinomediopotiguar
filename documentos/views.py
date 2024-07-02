from django.shortcuts import render

def referencial(request):
    return render(request, 'documentos/referencial.html')

def arquitetura(request):
    return render(request, 'documentos/arquitetura.html')

def estruturas(request):
    return render(request, 'documentos/estruturas.html')

def itinerariosformativos(request):
    return render(request, 'documentos/itinerariosformativos.html')

def projetodevida(request):
    return render(request, 'documentos/projetodevida.html')

def eletivas(request):
    return render(request, 'documentos/eletivas.html')

def trilhasdeaprofundamento(request):
    return render(request, 'documentos/trilhasdeaprofundamento.html')

def atividadesintegradoras(request):
    return render(request, 'documentos/atividadesintegradoras.html')

def oficinasformativas(request):
    return render(request, 'documentos/oficinasformativas.html')

def normativos(request):
    return render(request, 'documentos/normativos.html')

def publicacoes(request):
    return render(request, 'documentos/publicacoes.html')
