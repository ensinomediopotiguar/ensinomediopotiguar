from django import forms
from .models import Pessoa, SubmissaoResumo, SubmissaoMinicurso, Eixo, InscricaoMinicurso, Minicurso

class PessoaForm(forms.ModelForm):
    class Meta:
        model = Pessoa
        fields = '__all__'
        
        labels = {
            'nome': 'Nome:',
            'email': 'E-mail:',
            'telefone': 'Telefone:',
            'instituicao': 'Instituição:',
            'categoria': 'Categoria:',
        }

class SubmissaoResumoForm(forms.ModelForm):
    class Meta:
        model = SubmissaoResumo
        fields = '__all__'

        labels = {
            'coautor1': 'Coautor 1:',
            'coautor2': 'Coautor 2:',
            'coautor3': 'Coautor 3:',
            'coautor4': 'Coautor 4:',
            'email': 'E-mail:',
            'instituicao': 'Instituição:',
            'titulo': 'Título:',
            'palavrasChave': 'Palavras-Chave:',
            'eixo': 'Eixos:',
        }

    def __init__(self, *args, **kwargs):
        super(SubmissaoResumoForm, self).__init__(*args, **kwargs)
        self.fields['eixo'].queryset = Eixo.objects.all()

class SubmissaoMinicursoForm(forms.ModelForm):
    class Meta:
        model = SubmissaoMinicurso
        fields = '__all__'

        labels = {
            'email': 'E-mail:',
            'formacao': 'Formação',
            'instituicao': 'Instituição:',
            'titulo': 'Título:',
            'eixo': 'Eixos:',
            'paper': 'Minicurso:',
        }

    def __init__(self, *args, **kwargs):
        super(SubmissaoMinicursoForm, self).__init__(*args, **kwargs)
        self.fields['eixo'].queryset = Eixo.objects.all()

class InscricaoMinicursoForm(forms.ModelForm):
    class Meta:
        model = InscricaoMinicurso
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(InscricaoMinicursoForm, self).__init__(*args, **kwargs)
        self.fields['minicurso'].queryset = Minicurso.objects.all()