from difflib import SequenceMatcher
import pandas as pd
import json

def similar(a, b):
    return SequenceMatcher(None, a, b).ratio()

with open('csvjson.json', 'r', encoding="utf8") as myfile:
    x = myfile.read()
    
with open("csvjsonAdded.json", 'r', encoding="utf8") as myfile1:
    y = myfile1.read()
    
obj = json.loads(x)
obj1 = json.loads(y)



origjson = []
addedjson = []

ones = []


for i in range(0, len(obj)):
    origjson.append(obj[i]['Name_and_model'])
    for j in range(0, len(obj1)):
        addedjson.append(obj1[j]['Name_and_model'])


for i in range(0, len(obj)):
    for j in range(0, len(obj1)):
        if similar(origjson[i], addedjson[j]) == 1:
            ones.append(origjson[i])
            addedjson.remove(addedjson[j])
            
        elif similar(origjson[i], addedjson[j]) >= 0.9:
            print(origjson[i], addedjson[j])
            inp = input("Similar?")
            if inp == "y":
                ones.append(origjson[i])
            
    print(i)

for i in range(0, len(ones)):
    for j in range(0, len(obj1)):
        if ones[i] == obj1[j]['Name_and_model']:
            Dumpy = json.dumps({"Country":obj1[j]["Country"], "Engine":obj1[j]["Engine"], "Engine_placement":obj1[j]["Engine_placement"], "Transmission":obj1[j]["Transmission"], "Weight_ratio":obj1[j]["Weight_ratio"], "Bhp":obj1[j]["Bhp"], "Torque":obj1[j]["Torque"], "Rarity":obj1[j]["Rarity"]})

# print("Opening file...")
# jsonFile = open("csvjson.json", "w")
# print("Writing file...")
# jsonFile.write(Dumpy)
# print("Closing file...")
# jsonFile.close()

print("Finished!!!")