from django.shortcuts import render, redirect
from django.core.validators import FileExtensionValidator
from django.forms import ValidationError
from django.db import IntegrityError
from django.contrib import messages
from django.http import JsonResponse
from .models import Pessoa, SubmissaoResumo, SubmissaoMinicurso, Eixo, InscricaoMinicurso, Minicurso
from .forms import PessoaForm, SubmissaoResumoForm, SubmissaoMinicursoForm, InscricaoMinicursoForm

def evento(request):
    
    return render(request, 'evento/evento.html')

def i_seminario(request):
    
    return render(request, 'evento/i-seminario.html')

def ii_seminario(request):
    
    return render(request, 'evento/ii-seminario.html')

def inscricao(request):

    if request.method == 'POST':
        form = PessoaForm(request.POST)
        
        if form.is_valid():
            nome = form.cleaned_data['nome']

            nomes_registrados = Pessoa.objects.values_list('nome', flat=True)
            if (nome in nomes_registrados):
                form.add_error(None, "Pessoa inscrita no evento!")
            else:
                form.save()  # Salva os dados no banco de dados
                messages.success(request, 'Inscrição efetuada com sucesso!')
                return redirect('evento')
    else:
        form = PessoaForm()

    return render(request, 'evento/inscricao.html', {'form': form})

def submeterresumo(request):
    eixos = Eixo.objects.all()  # Recupere os eixos do banco de dados

    if request.method == 'POST':
        form = SubmissaoResumoForm(request.POST, request.FILES)
        if form.is_valid():
            autor = form.cleaned_data['autor']
            coautores = [
                form.cleaned_data['coautor1'],
                form.cleaned_data['coautor2'],
                form.cleaned_data['coautor3'],
                form.cleaned_data['coautor4'],
            ]

            nomes_registrados = Pessoa.objects.values_list('nome', flat=True)
            if (autor not in nomes_registrados) or any(coautor and coautor not in nomes_registrados for coautor in coautores):
                form.add_error(None, "Um ou mais autores não estão registrados no evento. Por favor, realizar inscrição!")
            else:
                try:
                    file_validator = FileExtensionValidator(allowed_extensions=['pdf'])
                    file_validator(form.cleaned_data['paper'])

                    form.save()
                    messages.success(request, 'Submissão realizada com sucesso!')
                    return redirect('evento')
                except ValidationError as e:
                    form.add_error(None, "O arquivo deve ser um PDF.")
                    
                    return render(request, 'evento/submeterresumo.html', {'form': form, 'eixos': eixos})
    else:
        form = SubmissaoResumoForm()
    
    return render(request, 'evento/submeterresumo.html', {'form': form, 'eixos': eixos})

def submeterminicurso(request):
    eixos = Eixo.objects.all()

    if request.method == 'POST':
        form = SubmissaoMinicursoForm(request.POST, request.FILES)
        if form.is_valid():
            autor = form.cleaned_data['autor']

            nomes_registrados = Pessoa.objects.values_list('nome', flat=True)
            if (autor not in nomes_registrados):
                form.add_error(None, "Autor não está registrado no evento. Por favor, faça a inscrição!")
            else:
                try:
                    file_validator = FileExtensionValidator(allowed_extensions=['pdf'])
                    file_validator(form.cleaned_data['paper'])

                    form.save() 
                    messages.success(request, 'Submissão realizada com sucesso!')
                    return redirect('evento')
                except ValidationError as e:
                    form.add_error(None, "O arquivo deve ser um PDF.")
                    
                    return render(request, 'evento/submeterminicurso.html', {'form': form, 'eixos': eixos})
                
    else:
        form = SubmissaoMinicursoForm()
    
    return render(request, 'evento/submeterminicurso.html', {'form': form, 'eixos': eixos})

def inscricaominicurso(request):
    minicursos = Minicurso.objects.all()

    if request.method == 'POST':
        form = InscricaoMinicursoForm(request.POST)
        
        if form.is_valid():
            nome = form.cleaned_data['nome']

            nomes_registrados = Pessoa.objects.values_list('nome', flat=True)
            
            if (nome not in nomes_registrados):
                form.add_error(None, "Pessoa não está registrado no evento. Por favor, faça a inscrição!")
            
            else:
                form.save()  # Salva os dados no banco de dados
                messages.success(request, 'Inscrição efetuada com sucesso!')
                return redirect('evento')
                
    else:
        form = InscricaoMinicursoForm()
    
    return render(request, 'evento/inscricaominicurso.html', {'form': form, 'minicursos': minicursos})