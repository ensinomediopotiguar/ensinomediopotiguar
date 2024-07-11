from django.urls import path
from . import views

urlpatterns = [
    path('', views.seliganoenem, name='seliganoenem'),
    path('prazos', views.prazos, name='prazos'),
    path('depois', views.depois, name='depois'),
    path('dicas', views.dicas, name='dicas'),
    path('cursos', views.cursos, name='cursos'),
    path('estudecgnt', views.estudecgnt, name='estudecgnt')
]