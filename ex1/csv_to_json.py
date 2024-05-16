import csv
import json

def read_csv_file(file_path):
    bd = []
    try:
        with open(file_path, 'r') as csv_file:
            csv_reader = csv.DictReader(csv_file, delimiter=';')

            for row in csv_reader:
                bd.append(row)
    except FileNotFoundError:
        print('File not found.')
    except Exception as e:
        print(f'Error: {e}')

    return bd

def pertence(value, bd):
    encontrado = False
    i = 0
    while i < len(bd) and not encontrado:
        if bd[i]['designacao'] == value:
            encontrado = True
            break
        i += 1
    return encontrado

def calc_especied(bd):
    especies = []
    cont = 1
    for reg in bd:
        if reg['BreedIDDesc'] != '' and not pertence(reg['BreedIDDesc'], especies):
            especies.append({
                'id': f'e{cont}',
                'designacao': reg['BreedIDDesc'],
                'animal': reg['SpeciesIDDesc']
            })
            cont += 1
    return especies

def calc_animais(bd):
    animais = []
    cont = 1
    for reg in bd:
        if reg['SpeciesIDDesc'] != '' and not pertence(reg['SpeciesIDDesc'], animais):
            animais.append({
                'id': f'a{cont}',
                'designacao': reg['SpeciesIDDesc'],
            })
            cont += 1
    return animais

myBD = read_csv_file("./contratos2024.csv")
#especies = calc_especied(myBD)
#animais = calc_animais(myBD)

novaBD = {
    'contratos': myBD,
}

f = open('contratos.json', 'w')
json.dump(novaBD, f, indent=4)
f.close()