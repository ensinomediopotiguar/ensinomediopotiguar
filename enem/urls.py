from django.urls import path
from . import views

urlpatterns = [
    path('', views.seliganoenem, name='seliganoenem'),
    path('prazos', views.prazos, name='seliganoenem/prazos'),
    path('depois', views.depois, name='seliganoenem/depois'),
    path('dicas', views.dicas, name='seliganoenem/dicas'),
    path('cursos', views.cursos, name='seliganoenem/cursos'),
    path('estudecgnt', views.estudecgnt, name='seliganoenem/estudecgnt')
]