from urllib.request import urlopen
from bs4 import BeautifulSoup
import pandas as pd
import re
from openpyxl import Workbook


columnli = ["Name_and_model", "Price", "Spec", "Rating", "Country", "Engine", "Engine_placement", "Transmission", "Weight_ratio", "Bhp", "Torque", "Rarity"]

name = []
price = []
spec = []
rating = []
country = []
engine = []
engineplacement = []
trans = []
weightrat = []
brakehp = []
torq = []
rarity = []


URL = "https://forza.fandom.com/wiki/Forza_Horizon_5/Cars"
soup = BeautifulSoup(urlopen(URL), 'html.parser')

div1 = "div", {"style": "line-height: 16px; padding-bottom: 1px"}

atag = soup.find("table", {"class": "table"}).find_all("a", class_=False)

divtag = soup.find("table", {"class": "table"}).find_all("div")

for element in divtag:
    divprice = element.find('div', {'style':'font-size:12px;padding-bottom:2px'})
    print(divtag["style"])

# for element in atag:
#     href = element.get("href")
#     
#     if re.compile("Forza_Horizon_5").search(href) == None:
#         URL2 = "https://forza.fandom.com/" + href
#         soup2 = BeautifulSoup(urlopen(URL2), 'html.parser')
#         
#         href = href.replace("/wiki/", "")
#         href = href.replace("_", " ")
#         
#         year = soup2.find_all("div", {"class": "pi-data-value pi-font"})
#         
#         li = []
#         for elementDiv in year:
#             if elementDiv.text is not None:
#                 li.append(elementDiv.text)
#             else:
#                 print()
#         years = li[1].split()
#         
# #         print(years[0] + " " + href + "\n")
#         
#         if years[0] + " " + href == "2010 James Bond Edition Jaguar C-X75":
#             continue
#         elif years[0] + " " + href == "2015 Lamborghini 63 Squadra Corse Hurac%C3%A1n LP620-2 Super Trofeo":
#             continue
#         
#         raritytag = soup2.find("table", {"class": "fh5"}).find_all("span")
#         
#         rareli = []
#         
#         for elementSpan in raritytag:
#             if elementSpan.text is not None:
#                 rareli.append(elementSpan.text)
#             else:
#                 print()
#         
#         desc = soup2.blockquote
#         
#         
#         
#         name.append(years[0] + " " + href)
#         
#         
#         if li[0] == "Cadillac" and li[1] == "2016 Production Car" and li[5] == "8-speed\xa0Transmission":
#             li[1] = "United States of America"
#         elif years[0] + " " + href == "2018 Ford Mustang GT DeBerti Design":
#             continue
#         elif years[0] + " " + href == "2017 Ford 14 Rahal Letterman Lanigan Racing GRC Fiesta":
#             li.remove(li[1])
#             li[5] = "info_not_found"
#             li.append("2746 lbs (1246 kg), 54%/46%")
#         elif years[0] + " " + href == "1965 Ford Transit":
#             li.remove(li[1])
#             li[5] = "info_not_found"
#             li.append("3527 lbs (1600 kg), 52%/48%")
#         elif years[0] + " " + href == "1973 Land Rover Range Rover":
#             li.remove(li[1])
#             li[5] = "info_not_found"
#             li.append("3800 lbs (1724 kg), 50%/50%")
#         elif years[0] + " " + href == "1939 Maserati 8CTF":
#             li[1] = "Italy"
#         elif years[0] + " " + href == "2020 McLaren GT":
#             li.remove(li[1])
#             li[5] = "info_not_found"
#             li.append("3384 lbs (1535 kg), 43%/57%")
#         elif years[0] + " " + href == "1953 Morris Minor Series II Traveler":
#             li.remove(li[1])
#             li[5] = "info_not_found"
#             li.append("1757 lbs (797 kg), 52%/48%")
#         elif years[0] + " " + href == "2019 Subaru STI S209":
#             li[1] = "Japan"
#         elif years[0] + " " + href == "2017 Volkswagen 34 Volkswagen Andretti Rallycross Beetle" or years[0] + " " + href == "1969 Volkswagen Class 5/1600 Baja Bug" or years[0] + " " + href == "1992 Volkswagen Golf Gti 16v Mk2" or years[0] + " " + href == "1983 Volkswagen Golf GTI" or years[0] + " " + href == "1998 Volkswagen GTI VR6 Mk3":
#             li[1] = "Germany"
#         else:
#             li.remove(li[1])
#             
#         
# #         print(li)
#         print()
#         
#         country.append(li[1])
#         
#         enginetype = li[2]
#         enginetype1 = enginetype.replace("\xa0", " ")
#         engine.append(enginetype1)
#         
#         bhpfull = li[3].split(",")
#         bhp = bhpfull[0]
#         torque = bhpfull[1]
#         bhp1 = bhp.replace("\xa0", " ")
#         torque1 = torque.replace("\xa0", " ")
#         torque2 = torque.replace("lbâ‹…", "")
#         brakehp.append(bhp1)
#         torq.append(torque2)
#         
#         e = li[4].split(",")
#         engineplace = e[0]
#         engineplacement.append(engineplace)
#         
#         transmis = li[5].replace("\xa0", " ")
#         trans.append(transmis)
#         
#         weight = li[6].split(",")
#         weightratio = weight[1]
#         weightratio1 = weightratio.replace("\xa0", " ")
#         weightrat.append(weightratio)
#         
#         rarity.append(rareli[2])
#         
#         li.remove(li[3])
# 
# df = pd.DataFrame(list(zip(name,country,engine,engineplacement, trans, weightrat, brakehp, torq, rarity)), columns=columnli)
# df.to_csv('FH5json2.csv')
# 
#         
#         
# 
# 
