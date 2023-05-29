from django.shortcuts import render
from .models import Painel

def natal(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Natal')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/natal.html', context=context)

def macaiba(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Macaíba')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/macaiba.html', context=context)

def ares(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Arês')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ares.html', context=context)

def baiaformosa(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Baía Formosa')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/baiaformosa.html', context=context)
    
def canguaretama(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Canguaretama')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/canguaretama.html', context=context)

def extremoz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Extremoz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/extremoz.html', context=context)

def goianinha(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Goianinha')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/goianinha.html', context=context)

def montealegre(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Monte Alegre')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/montealegre.html', context=context)

def nisiafloresta(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Nísia Floresta')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/nisiafloresta.html', context=context)

def parnamirim(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Parnamirim')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/parnamirim.html', context=context)

def saogoncalodoamarante(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Gonçalo do Amarante')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saogoncalodoamarante.html', context=context)

def saojosedemipibu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São José de Mipibu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saojosedemipibu.html', context=context)
    
def senadorgeorginoavelino(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Senador Georgino Avelino')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/senadorgeorginoavelino.html', context=context)

def tibaudosul(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Tibau do Sul')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/tibaudosul.html', context=context)

def veracruz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Vera Cruz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/veracruz.html', context=context)

def vilaflor(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Vila Flor')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/vilaflor.html', context=context)

def boasaude(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Januário Cicco')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/boasaude.html', context=context)

def brejinho(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Brejinho')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/brejinho.html', context=context)

def espiritosanto(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Espírito Santo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/espiritosanto.html', context=context)

def jundia(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jundiá')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jundia.html', context=context)

def lagoadanta(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lagoa DAnta')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lagoadanta.html', context=context)

def lagoadepedras(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lagoa de Pedras')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lagoadepedras.html', context=context)

def lagoasalgada(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lagoa Salgada')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lagoasalgada.html', context=context)

def montanhas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Montanhas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/montanhas.html', context=context)
    
def montedasgameleiras(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Monte das Gameleiras')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/montedasgameleiras.html', context=context)

def novacruz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Nova Cruz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/novacruz.html', context=context)

def passaefica(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Passa e Fica')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/passaefica.html', context=context)

def passagem(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Passagem')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/passagem.html', context=context)

def pedrovelho(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pedro Velho')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pedrovelho.html', context=context)

def santoantonio(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Santo Antônio')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/santoantonio.html', context=context)

def saojosedocampestre(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São José do Campestre')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saojosedocampestre.html', context=context)

def serradesaobento(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serra de São Bento')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serradesaobento.html', context=context)

def serrinha(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serrinha')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serrinha.html', context=context)

def varzea(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Várzea')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/varzea.html', context=context)

def barcelona(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Barcelona')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/barcelona.html', context=context)

def bomjesus(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Bom Jesus')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/bomjesus.html', context=context)

def caicaradoriodovento(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Caiçara do Rio do Vento')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/caicaradoriodovento.html', context=context)
    
def ielmomarinho(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ielmo Marinho')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ielmomarinho.html', context=context)

def lagoadevelhos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lagoa de Velhos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lagoadevelhos.html', context=context)

def riachuelo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Riachuelo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/riachuelo.html', context=context)

def ruybarbosa(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ruy Barbosa')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ruybarbosa.html', context=context)

def santamaria(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Santa Maria')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/santamaria.html', context=context)

def saopaulodopotengi(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Paulo do Potengi')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saopaulodopotengi.html', context=context)

def saopedro(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Pedro')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saopedro.html', context=context)

def saotome(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Tomé')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saotome.html', context=context)

def senadoreloidesouza(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Senador Elói de Souza')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/senadoreloidesouza.html', context=context)

def serracaiada(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serra Caiada')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serracaiada.html', context=context)

def cearamirim(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ceará-Mirim')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/cearamirim.html', context=context)

def maxaranguape(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Maxaranguape')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/maxaranguape.html', context=context)

def pureza(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pureza')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pureza.html', context=context)

def riodofogo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Rio do Fogo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/riodofogo.html', context=context)

def saomigueldogostoso(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Miguel do Gostoso')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saomigueldogostoso.html', context=context)

def taipu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Taipu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/taipu.html', context=context)

def touros(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Touros')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/touros.html', context=context)

def altodorodrigues(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Alto do Rodrigues')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/altodorodrigues.html', context=context)

def galinhos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Galinhos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/galinhos.html', context=context)

def guamare(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Guamaré')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/guamare.html', context=context)

def macau(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Macau')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }


    return render(request, 'municipio/macau.html', context=context)

def pendencias(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pendências')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pendencias.html', context=context)

def portodomangue(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Porto do Mangue')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/portodomangue.html', context=context)

def camporedondo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Campo Redondo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/camporedondo.html', context=context)

def coronelezequiel(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Coronel Ezequiel')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/coronelezequiel.html', context=context)

def jacana(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jaçanã')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jacana.html', context=context)

def japi(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Japi')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }
    return render(request, 'municipio/japi.html', context=context)

def lajespintadas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lajes Pintadas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lajespintadas.html', context=context)

def santacruz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Santa Cruz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/santacruz.html', context=context)

def saobentodotrairi(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Bento do Trairí')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saobentodotrairi.html', context=context)

def sitionovo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Sítio Novo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/sitionovo.html', context=context)

def tangara(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Tangará')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }
    return render(request, 'municipio/tangara.html', context=context)

def afonsobezerra(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Afonso Bezerra')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/afonsobezerra.html', context=context)

def angicos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Angicos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/angicos.html', context=context)

def bodo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Bodó')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/bodo.html', context=context)

def fernandopedroza(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Fernando Pedroza')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/fernandopedroza.html', context=context)

def lajes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lajes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lajes.html', context=context)

def pedroavelino(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pedro Avelino')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pedroavelino.html', context=context)

def santanadomatos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Santana do Matos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/santanadomatos.html', context=context)

def acari(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Acari')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/acari.html', context=context)

def carnaubadosdantas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Carnaúba dos Dantas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/carnaubadosdantas.html', context=context)

def cerrocora(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Cerro Corá')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/cerrocora.html', context=context)

def cruzeta(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Cruzeta')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/cruzeta.html', context=context)

def curraisnovos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Currais Novos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/curraisnovos.html', context=context)

def equador(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Equador')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/equador.html', context=context)

def florania(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Florânia')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/florania.html', context=context)

def lagoanova(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lagoa Nova')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lagoanova.html', context=context)

def parelhas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Parelhas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/parelhas.html', context=context)

def santanadoserido(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Santana do Seridó')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/santanadoserido.html', context=context)

def saovicente(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Vicente')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saovicente.html', context=context)

def tenentelaurentinocruz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Tenente Laurentino Cruz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/tenentelaurentinocruz.html', context=context)

def caico(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Caicó')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/caico.html', context=context)

def ipueira(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ipueira')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ipueira.html', context=context)

def jardimdepiranhas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jardim de Piranhas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jardimdepiranhas.html', context=context)

def jardimdoserido(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jardim do Seridó')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jardimdoserido.html', context=context)

def jucurutu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jucurutu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jucurutu.html', context=context)

def ourobranco(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ouro Branco')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ourobranco.html', context=context)

def saofernando(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Fernando')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saofernando.html', context=context)

def saojoaodosabugi(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São João do Sabugi')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saojoaodosabugi.html', context=context)

def saojosedoserido(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São José do Seridó')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saojosedoserido.html', context=context)

def serranegradonorte(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serra Negra do Norte')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serranegradonorte.html', context=context)

def timbaubadobatistas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Timbaúba dos Batistas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/timbaubadobatistas.html', context=context)

def assu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Açu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/assu.html', context=context)

def campogrande(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Campo Grande')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/campogrande.html', context=context)

def carnaubais(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Carnaubais')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/carnaubais.html', context=context)

def ipanguacu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Ipanguaçu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/ipanguacu.html', context=context)

def itaja(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Itajá')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/itaja.html', context=context)

def parau(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Paraú')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/parau.html', context=context)

def saorafael(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Rafael')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saorafael.html', context=context)

def triunfopotiguar(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Triunfo Potiguar')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/triunfopotiguar.html', context=context)

def areiabranca(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Areia Branca')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/areiabranca.html', context=context)

def barauna(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Baraúna')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/barauna.html', context=context)

def governadordixseptrosado(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Governador Dix-Sept Rosado')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/governadordixseptrosado.html', context=context)

def grossos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Grossos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/grossos.html', context=context)

def mossoro(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Mossoró')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/mossoro.html', context=context)

def serradomel(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serra do Mel')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serradomel.html', context=context)

def tibau(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Tibau')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/tibau.html', context=context)

def upanema(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Upanema')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/upanema.html', context=context)

def apodi(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Apodi')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/apodi.html', context=context)

def caraubas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Caraúbas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/caraubas.html', context=context)

def felipeguerra(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Felipe Guerra')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/felipeguerra.html', context=context)

def itau(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Itaú')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/itau.html', context=context)

def rodolfofernandes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Rodolfo Fernandes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/rodolfofernandes.html', context=context)

def severianomelo(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Severiano Melo')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/severianomelo.html', context=context)

def taboleirogrande(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Taboleiro Grande')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/taboleirogrande.html', context=context)

def alminoafonso(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Almino Afonso')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/alminoafonso.html', context=context)

def antoniomartins(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Antônio Martins')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/antoniomartins.html', context=context)

def frutuosogomes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Frutuoso Gomes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/frutuosogomes.html', context=context)

def janduis(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Janduís')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/janduis.html', context=context)

def joaodias(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='João Dias')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/joaodias.html', context=context)

def lucrecia(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Lucrécia')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/lucrecia.html', context=context)

def martins(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Martins')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/martins.html', context=context)

def messiastargino(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Messias Targino')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/messiastargino.html', context=context)

def olhodaguadoborges(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Olho dÁgua do Borges')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/olhodaguadoborges.html', context=context)

def patu(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Patu')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/patu.html', context=context)

def rafaelgodeiro(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Rafael Godeiro')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/rafaelgodeiro.html', context=context)

def riachodacruz(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Riacho da Cruz')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/riachodacruz.html', context=context)

def serrinhadospintos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Serrinha dos Pintos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/serrinhadospintos.html', context=context)

def umarizal(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Umarizal')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/umarizal.html', context=context)

def vicosa(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Viçosa')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/vicosa.html', context=context)

def aguanova(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Água Nova')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/aguanova.html', context=context)

def alexandria(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Alexandria')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/alexandria.html', context=context)

def coroneljoaopessoa(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Coronel João Pessoa')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/coroneljoaopessoa.html', context=context)

def doutorseveriano(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Doutor Severiano')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/doutorseveriano.html', context=context)

def encanto(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Encanto')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/encanto.html', context=context)

def franciscodantas(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Francisco Dantas')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/franciscodantas.html', context=context)

def josedapenha(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='José da Penha')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/josedapenha.html', context=context)

def luisgomes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Luís Gomes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/luisgomes.html', context=context)

def majorsales(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Major Sales')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/majorsales.html', context=context)

def marcelinovieira(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Marcelino Vieira')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/marcelinovieira.html', context=context)

def parana(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Paraná')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/parana.html', context=context)

def paudosferros(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pau dos Ferros')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/paudosferros.html', context=context)

def piloes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pilões')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/piloes.html', context=context)

def portalegre(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Portalegre')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/portalegre.html', context=context)

def rafaelfernandes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Rafael Fernandes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/rafaelfernandes.html', context=context)

def riachodesantana(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Riacho de Santana')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/riachodesantana.html', context=context)

def saofranciscodooeste(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Francisco do Oeste')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saofranciscodooeste.html', context=context)

def saomiguel(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Miguel')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saomiguel.html', context=context)

def tenenteananias(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Tenente Ananias')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/tenenteananias.html', context=context)

def venhaver(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Venha-Ver')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/venhaver.html', context=context)

def caicaradonorte(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Caiçara do Norte')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/caicaradonorte.html', context=context)

def bentofernandes(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Bento Fernandes')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/bentofernandes.html', context=context)

def jandaira(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jandaíra')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jandaira.html', context=context)

def jardimdeangicos(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Jardim de Angicos')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/jardimdeangicos.html', context=context)

def joaocamara(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='João Câmara')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/joaocamara.html', context=context)

def parazinho(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Parazinho')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/parazinho.html', context=context)

def pedragrande(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pedra Grande')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pedragrande.html', context=context)

def pedrapreta(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Pedra Preta')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pedrapreta.html', context=context)

def pocobranco(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='Poço Branco')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/pocobranco.html', context=context)

def saobentodonorte(request):
    escola = request.GET.get('escola')

    dados = Painel.objects.filter(nomeMunicipio__icontains='None')
    escolas = Painel.objects.filter(nomeMunicipio__icontains='São Bento do Norte')

    if escola:
        dados = Painel.objects.filter(codEscola__icontains=escola)

    context = {
        'dados': dados,
        'escolas': escolas
    }

    return render(request, 'municipio/saobentodonorte.html', context=context)