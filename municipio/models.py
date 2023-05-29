from django.db import models

class Painel(models.Model):
    direc = models.IntegerField()
    nomeMunicipio = models.CharField(max_length=255)
    codEscola = models.IntegerField()
    nomeEscola = models.CharField(max_length=255)
    ofertaFund = models.IntegerField()
    ofertaEJA = models.IntegerField()
    mat1Serie = models.IntegerField()
    mat2Serie = models.IntegerField()
    mat3Serie = models.IntegerField()
    matNoturno = models.IntegerField()
    matDiurnoParcial = models.IntegerField()
    matDiurnoIntegral = models.IntegerField()
    matRegular = models.IntegerField()
    matProfissional = models.IntegerField()
    taxApr1Serie = models.FloatField()
    taxApr2Serie = models.FloatField()
    taxApr3Serie = models.FloatField()
    taxRet1Serie = models.FloatField()
    taxRet2Serie = models.FloatField()
    taxRet3Serie = models.FloatField()
    taxEva1Serie = models.FloatField()
    taxEva2Serie = models.FloatField()
    taxEva3Serie = models.FloatField()
    taxAprMedia = models.FloatField()
    taxRepMedia = models.FloatField()
    taxEvaMedia = models.FloatField()
    idebEscola = models.FloatField()
    idebRN = models.FloatField()
    simaisPor = models.FloatField()
    simaisMat = models.FloatField()
    metSimaisPor = models.FloatField()
    metSimaisMat = models.FloatField()
    metIdebEscola = models.FloatField()
    metIdebRN = models.FloatField()

    def __int__(self):
        return self.direc

    def __str__(self):
        return self.nomeMunicipio

    def __int__(self):
        return self.codEscola

    def __str__(self):
        return self.nomeEscola

    def __str__(self):
        return self.ofertaFund

    def __str__(self):
        return self.ofertaEJA

    def __int__(self):
        return self.mat1Serie

    def __int__(self):
        return self.mat2Serie

    def __int__(self):
        return self.mat3Serie

    def __int__(self):
        return self.matNoturno

    def __int__(self):
        return self.matDiurnoParcial

    def __int__(self):
        return self.matDiurnoIntegral

    def __int__(self):
        return self.matRegular

    def __int__(self):
        return self.matProfissional

    def __float__(self):
        return self.taxApr1Serie

    def __float__(self):
        return self.taxApr2Serie

    def __float__(self):
        return self.taxApr3Serie

    def __float__(self):
        return self.taxRet1Serie

    def __float__(self):
        return self.taxRet2Serie

    def __float__(self):
        return self.taxRet3Serie

    def __float__(self):
        return self.taxEva1Serie

    def __float__(self):
        return self.taxEva2Serie

    def __float__(self):
        return self.taxEva3Serie

    def __float__(self):
        return self.taxAprMedia

    def __float__(self):
        return self.taxRepMedia

    def __float__(self):
        return self.taxEvaMedia

    def __float__(self):
        return self.idebEscola

    def __float__(self):
        return self.idebRN

    def __float__(self):
        return self.simaisPor

    def __float__(self):
        return self.simaisMat

    def __float__(self):
        return self.metSimaisPor

    def __float__(self):
        return self.metSimaisMat

    def __float__(self):
        return self.metIdebEscola

    def __float__(self):
        return self.metIdebRN