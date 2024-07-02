from django.urls import path
from . import views

urlpatterns = [
    path('', views.seliganoenem, name='seliganoenem'),
    path('prazos', views.prazos, name='prazos'),
    path('posenem', views.posenem, name='posenem'),
    path('dicas', views.dicas, name='dicas'),
    path('redacao', views.redacao, name='redacao'),
    path('conhecaoscursos', views.conhecaoscursos, name='conhecaoscursos'),
]