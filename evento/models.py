from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    instituicao = models.CharField(max_length=255)
    categoria = models.CharField(max_length=50, choices=[
        ('Estudantes da Educação Básica', 'Estudantes da Educação Básica'),
        ('Estudantes de Graduação', 'Estudantes de Graduação'),
        ('Estudantes de Pós-Graduação', 'Estudantes de Pós-Graduação'),
        ('Profissionais da Educação Básica', 'Profissionais da Educação Básica'),
        ('Profissionais da Educação Superior', 'Profissionais da Educação Superior'),
        ('Demais Interessados', 'Demais Interessados'),
    ])

    def __str__(self):
        return self.nome

# Modelo para representar os eixos de categorização
class Eixo(models.Model):
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

# Modelo para representar as submissões de trabalhos
class SubmissaoResumo(models.Model):
    autor = models.CharField(max_length=255)
    coautor1 = models.CharField(max_length=255, blank=True)  # tornando-o opcional
    coautor2 = models.CharField(max_length=255, blank=True)  # tornando-o opcional
    coautor3 = models.CharField(max_length=255, blank=True)  # tornando-o opcional
    coautor4 = models.CharField(max_length=255, blank=True)  # tornando-o opcional
    email = models.EmailField()
    instituicao = models.CharField(max_length=255)
    titulo = models.CharField(max_length=255)
    palavrasChave = models.CharField(max_length=255)
    paper = models.FileField(upload_to='evento/resumos/')
    eixo = models.ForeignKey(Eixo, on_delete=models.PROTECT, blank=False)  # tornando-o obrigatório

    def __str__(self):
        return self.autor

# Modelo para representar as submissões de minicursos
class SubmissaoMinicurso(models.Model):
    autor = models.CharField(max_length=255)
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    formacao = models.CharField(max_length=20, choices=[
        ('Graduação', 'Graduação'),
        ('Especialização', 'Especialização'),
        ('Mestrado', 'Mestrado'),
        ('Doutorado', 'Doutorado'),
    ])
    instituicao = models.CharField(max_length=255)
    titulo = models.CharField(max_length=255)
    paper = models.FileField(upload_to='evento/minicursos/')
    eixo = models.ForeignKey(Eixo, on_delete=models.PROTECT, blank=False)  # tornando-o obrigatório

    def __str__(self):
        return self.autor

# Modelo para representar os minicuros de categorização
class Minicurso(models.Model):
    nome = models.CharField(max_length=255)
    autor = models.CharField(max_length=255)
    area = models.CharField(max_length=255)
    descricao = models.CharField(max_length=1000)

    def __str__(self):
        return self.nome

# Modelo para representar as inscrições nos minicursos
class InscricaoMinicurso(models.Model):
    nome = models.CharField(max_length=255)
    minicurso = models.ForeignKey(Minicurso, on_delete=models.PROTECT, blank=False)  # tornando-o obrigatório

    def __str__(self):
        return self.nome