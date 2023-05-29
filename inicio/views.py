from django.shortcuts import render

def inicio(request):
    #ImportToDatabase.import_data()
    
    return render(request, 'inicio/inicio.html')
