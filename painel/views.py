from django.shortcuts import render
from municipio.models import Painel

def painel(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='Rio Grande do Norte')
    #escolas = Painel.objects.filter(nomeMunicipio__icontains='Rio Grande do Norte')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        #'escolas': escolas
    }

    return render(request, 'painel/painel.html', context=context)
