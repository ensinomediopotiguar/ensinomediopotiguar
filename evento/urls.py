from django.urls import path
from . import views

urlpatterns = [
    path('', views.evento, name='evento'),
    path('i-seminario-ensino-medio-potiguar/', views.i_seminario, name='i-seminario'),
    path('ii-seminario-ensino-medio-potiguar/', views.ii_seminario, name='ii-seminario'),
    path('inscricao/', views.inscricao, name='inscricao'),
    path('inscricaominicurso/', views.inscricaominicurso, name='inscricaominicurso'),
    path('submeterresumo/', views.submeterresumo, name='submeterresumo'),
    path('submeterminicurso/', views.submeterminicurso, name='submeterminicurso'),
]