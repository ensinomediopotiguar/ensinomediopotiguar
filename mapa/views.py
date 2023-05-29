from django.shortcuts import render
from .models import Matriculas

def mapa(request):
    dados = Matriculas.objects.all()

    # Construir uma lista de dicionários com os dados desejados
    #serialized_dados = []
    #for item in dados:
    #    serialized_dados.append({
    #        'mat1Serie': item.mat1Serie,
    #        'mat2Serie': item.mat2Serie,
    #        'mat3Serie': item.mat3Serie,
    #    })

    # Serializar os dados como uma string JSON
    #serialized_dados_json = json.dumps(serialized_dados)

    # Passar os dados serializados como contexto para o template
    #context = {'dados': serialized_dados_json}

    # Retornar os dados em formato JSON
    #return JsonResponse({'dados': serialized_dados_json}, content_type='application/json')

    context = {
        'dados': dados,
    }

    return render(request, 'mapa/mapa.html', context=context)