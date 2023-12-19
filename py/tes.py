import pandas as pd

columnli = ["Country", "Engine", "Engine_placement", "Transmission", "Weight_ratio", "Bhp", "Torque", "Rarity"]

df = pd.read_csv('FH5json.csv')

df2 = pd.read_csv('FH5json2.csv')


origname = df["Name_and_model"].tolist()
addedname = df2["Name_and_model"].tolist()

df = df.reindex(columns = df.columns.tolist() + ["Country", "Engine", "Engine_placement", "Transmission", "Weight_ratio", "Bhp", "Torque", "Rarity"])

i = input("Name Orig: ")

j = input("Name Added: ")

df.loc[i, "Country"] = df2["Country"][j]
            df.loc[i, "Engine"] = df2["Engine"][j]
            df.loc[i, "Engine_placement"] = df2["Engine_placement"][j]
            df.loc[i, "Transmission"] = df2["Transmission"][j]
            df.loc[i, "Weight_ratio"] = df2["Weight_ratio"][j]
            df.loc[i, "Bhp",] = df2["Bhp"][j]
            df.loc[i, "Torque"] = df2["Torque"][j]
            df.loc[i, "Rarity"] = df2["Rarity"][j]