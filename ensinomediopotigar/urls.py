from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

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
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
