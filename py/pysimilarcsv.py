from fuzzywuzzy import fuzz
import pandas as pd

columnli = ["Country", "Engine", "Engine_placement", "Transmission", "Weight_ratio", "Bhp", "Torque", "Rarity"]

country = []
engine = []
engine_placement = []
transmission = []
weight_ratio = []
bhp = []
torque = []
rarity = []

df = pd.read_csv('FH5json.csv')

df2 = pd.read_csv('FH5json2.csv')


origname = df["Name_and_model"].tolist()
addedname = df2["Name_and_model"].tolist()

df = df.reindex(columns = df.columns.tolist() + ["Country", "Engine", "Engine_placement", "Transmission", "Weight_ratio", "Bhp", "Torque", "Rarity"])

ones = []

for i in range(0, len(origname)):
    for j in range(0, len(addedname)):
        if fuzz.ratio(origname[i], addedname[i]) == 100:
            ones.append(origname[i])
            df.loc[i, "Country"] = df2["Country"][j]
            df.loc[i, "Engine"] = df2["Engine"][j]
            df.loc[i, "Engine_placement"] = df2["Engine_placement"][j]
            df.loc[i, "Transmission"] = df2["Transmission"][j]
            df.loc[i, "Weight_ratio"] = df2["Weight_ratio"][j]
            df.loc[i, "Bhp",] = df2["Bhp"][j]
            df.loc[i, "Torque"] = df2["Torque"][j]
            df.loc[i, "Rarity"] = df2["Rarity"][j]
            print(i)
        elif fuzz.ratio(origname[i], addedname[i]) >= 92:
            print(origname[i], addedname[j])
            inp = input("Similar?")
            if inp == "y":
                df.loc[i, "Country"] = df2["Country"][j]
                df.loc[i, "Engine"] = df2["Engine"][j]
                df.loc[i, "Engine_placement"] = df2["Engine_placement"][j]
                df.loc[i, "Transmission"] = df2["Transmission"][j]
                df.loc[i, "Weight_ratio"] = df2["Weight_ratio"][j]
                df.loc[i, "Bhp",] = df2["Bhp"][j]
                df.loc[i, "Torque"] = df2["Torque"][j]
                df.loc[i, "Rarity"] = df2["Rarity"][j]
            
            
            
df.to_csv('FH5json.csv', index=False)
            