from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('inicio.urls')),
    path('trilhas/', include('trilhas.urls')),
    path('normativas/', include('normativas.urls')),
    path('referenciais/', include('referenciais.urls')),
    path('mapa/', include('mapa.urls')),
    path('noticias/', include('noticias.urls')),
    path('formacoes/', include('formacoes.urls')),
    path('duvidas/', include('duvidas.urls')),
    path('contato/', include('contato.urls')),
    path('municipio/', include('municipio.urls')),
    path('painel/', include('painel.urls')),
]