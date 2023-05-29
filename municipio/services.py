class ImportToDatabase(object):

    @staticmethod
    def import_data():
        with open('relatorioescolas.csv') as csvfile:
            reader = csv.reader(csvfile, delimiter=',')
            for row in reader:
                obj, created = Painel.objects.get_or_create(
                    direc = row[0],
                    nomeMunicipio = row[1],
                    codEscola = row[2],
                    nomeEscola = row[3],
                    zona = row[4],
                    depAdmin = row[5],
                    taxAprMedia = row[6],
                    numAprovacao = row[7],
                    taxRepMedia = row[8],
                    mat1Serie = row[9],
                    ret1Serie = row[10],
                    taxRet1Serie = row[11],
                    mat2Serie = row[12],
                    ret2Serie = row[13],
                    taxRet2Serie = row[14],
                    mat3Serie = row[15],
                    ret3Serie = row[16],
                    taxRet3Serie = row[17],
                    taxEvaMedia = row[18],
                    taxEva1Serie = row[19],
                    taxEva2Serie = row[20],
                    taxEva3Serie = row[21],
                    ideb = row[22],
                    simaisPor = row[23],
                    simaisMat = row[24],
                    metSimaisPor = row[25],
                    metSimaisMat = row[26],
                    metIdeb = row[27],
                    defIdeb = row[28],
                )