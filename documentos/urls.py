from django.urls import path
from . import views

urlpatterns = [
    path('referencial', views.referencial, name='documentos/referencial'),
    path('arquitetura', views.arquitetura, name='documentos/arquitetura'),
    path('estruturas', views.estruturas, name='documentos/estruturas'),
    path('itinerariosformativos', views.itinerariosformativos, name='documentos/itinerariosformativos'),
    path('projetodevida', views.projetodevida, name='documentos/projetodevida'),
    path('eletivas', views.eletivas, name='documentos/eletivas'),
    path('trilhasdeaprofundamento', views.trilhasdeaprofundamento, name='documentos/trilhasdeaprofundamento'),
    path('atividadesintegradoras', views.atividadesintegradoras, name='documentos/atividadesintegradoras'),
    path('oficinasformativas', views.oficinasformativas, name='documentos/oficinasformativas'),
    path('normativos', views.normativos, name='documentos/normativos'),
    path('publicacoes', views.publicacoes, name='documentos/publicacoes'),
]