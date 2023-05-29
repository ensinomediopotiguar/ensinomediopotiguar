from django.db import models

class Matriculas (models.Model):
    direc = models.IntegerField()
    municipio = models.CharField(max_length=255)
    mat1Serie = models.IntegerField()
    mat2Serie = models.IntegerField()
    mat3Serie = models.IntegerField()

    def __str__(self):
        return self.municipio