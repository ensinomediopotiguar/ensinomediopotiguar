import pandas as pd
import sqlite3

#Ler planilha:
planilha = pd.read_excel("inicio/static/inicio/documentos/relatorioescolas.xlsx")

for index, DADOS in enumerate(planilha['direc']):
        direc = planilha.loc[index, "direc"]
        nomeMunicipio = planilha.loc[index, "nomeMunicipio"]
        codEscola = planilha.loc[index, "codEscola"]
        nomeEscola = planilha.loc[index, "nomeEscola"]
        ofertaFund = planilha.loc[index, "ofertaFund"]
        ofertaEJA = planilha.loc[index, "ofertaEJA"]
        mat1Serie = planilha.loc[index, "mat1Serie"]
        mat2Serie = planilha.loc[index, "mat2Serie"]
        mat3Serie = planilha.loc[index, "mat3Serie"]
        matNoturno = planilha.loc[index, "matNoturno"]
        matDiurnoParcial = planilha.loc[index, "matDiurnoParcial"]
        matDiurnoIntegral = planilha.loc[index, "matDiurnoIntegral"]
        matRegular = planilha.loc[index, "matRegular"]
        matProfissional = planilha.loc[index, "matProfissional"]
        taxApr1Serie = planilha.loc[index, "taxApr1Serie"]
        taxApr2Serie = planilha.loc[index, "taxApr2Serie"]
        taxApr3Serie = planilha.loc[index, "taxApr3Serie"]
        taxRet1Serie = planilha.loc[index, "taxRet1Serie"]
        taxRet2Serie = planilha.loc[index, "taxRet2Serie"]
        taxRet3Serie = planilha.loc[index, "taxRet3Serie"]
        taxEva1Serie = planilha.loc[index, "taxEva1Serie"]
        taxEva2Serie = planilha.loc[index, "taxEva2Serie"]
        taxEva3Serie = planilha.loc[index, "taxEva3Serie"]
        taxAprMedia = planilha.loc[index, "taxAprMedia"]
        taxRepMedia = planilha.loc[index, "taxRepMedia"]
        taxEvaMedia = planilha.loc[index, "taxEvaMedia"]
        idebEscola = planilha.loc[index, "idebEscola"]
        idebRN = planilha.loc[index, "idebRN"]
        simaisPor = planilha.loc[index, "simaisPor"]
        simaisMat = planilha.loc[index, "simaisMat"]
        metSimaisPor = planilha.loc[index, "metSimaisPor"]
        metSimaisMat = planilha.loc[index, "metSimaisMat"]
        metIdebEscola = planilha.loc[index, "metIdebEscola"]
        metIdebRN = planilha.loc[index, "metIdebRN"]

        #Abrir conexão com BD.
        conectar = sqlite3.connect('db.sqlite3')

        #Popular dados
        try:
                cursor = conectar.cursor()

                # Executando o comando de atualização
                cursor.execute(f"UPDATE municipio_painel SET ofertaFund='{ofertaFund}', ofertaEJA='{ofertaEJA}', "
                               f"mat1Serie='{mat1Serie}', mat2Serie='{mat2Serie}', mat3Serie='{mat3Serie}', matNoturno='{matNoturno}', "
                               f"matDiurnoParcial='{matDiurnoParcial}', matDiurnoIntegral='{matDiurnoIntegral}', matRegular='{matRegular}', "
                               f"matProfissional='{matProfissional}', taxApr1Serie='{taxApr1Serie}', taxApr2Serie='{taxApr2Serie}', "
                               f"taxApr3Serie='{taxApr3Serie}', taxRet1Serie='{taxRet1Serie}', taxRet2Serie='{taxRet2Serie}', "
                               f"taxRet3Serie='{taxRet3Serie}', taxEva1Serie='{taxEva1Serie}', taxEva2Serie='{taxEva2Serie}', "
                               f"taxEva3Serie='{taxEva3Serie}', taxAprMedia='{taxAprMedia}', taxRepMedia='{taxRepMedia}', "
                               f"taxEvaMedia='{taxEvaMedia}', idebEscola='{idebEscola}', idebRN='{idebRN}', simaisPor='{simaisPor}', "
                               f"simaisMat='{simaisMat}', metSimaisPor='{metSimaisPor}', metSimaisMat='{metSimaisMat}', "
                               f"metIdebEscola='{metIdebEscola}', metIdebRN='{metIdebRN}' "
                               f"WHERE codEscola='{codEscola}'")

                conectar.commit()
                conectar.close()

        except Exception as e:
                print(f"Erro ao inserir dados no banco de dados: {e}")
                conectar.rollback()