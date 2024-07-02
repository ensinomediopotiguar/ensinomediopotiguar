from django.urls import path
from . import views

urlpatterns = [
    path('novoensinomedio', views.novoensinomedio, name='novoensinomedio'),
    path('pedemeia', views.pedemeia, name='pedemeia'),
]
