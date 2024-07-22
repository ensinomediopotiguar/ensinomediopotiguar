from django.conf import settings
from django.conf.urls.static import static, serve
from django.contrib import admin
from django.urls import path, include, re_path
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('inicio.urls')),
    path('documentos/', include('documentos.urls')),
    path('mapa/', include('mapa.urls')),
    path('duvidas/', include('duvidas.urls')),
    path('contato/', include('contato.urls')),
    path('municipio/', include('municipio.urls')),
    path('painel/', include('painel.urls')),
    path('evento/', include('evento.urls')),
    path('enem/', include('enem.urls')),

    # Configuração para servir arquivos estáticos no .well-known
    re_path(r'^\.well-known/(?P<path>.*)$', serve, {
        'document_root': os.path.join(BASE_DIR, '../../htdocs/.well-known/'),
    }),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
