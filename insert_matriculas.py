import pandas as pd
import sqlite3

#Ler planilha:
planilha = pd.read_excel("inicio/static/inicio/documentos/totalmatriculas.xlsx")

for index, DADOS in enumerate(planilha['direc']):
        direc = planilha.loc[index, "direc"]
        municipio = planilha.loc[index, "municipio"]
        mat1Serie = planilha.loc[index, "mat1Serie"]
        mat2Serie = planilha.loc[index, "mat2Serie"]
        mat3Serie = planilha.loc[index, "mat3Serie"]

        #Abrir conexão com BD.
        conectar = sqlite3.connect('db.sqlite3')

        #Popular dados
        try:
                cursor = conectar.cursor()

                #Executando o comando de inserção
                cursor.execute(f"INSERT INTO mapa_matriculas (direc, municipio, mat1Serie, mat2Serie, mat3Serie)"
                               f"VALUES ('{direc}', '{municipio}', '{mat1Serie}', '{mat2Serie}', '{mat3Serie}')")
                conectar.commit()
                conectar.close()

        except Exception as e:
                print(f"Erro ao inserir dados no banco de dados: {e}")
                conectar.rollback()