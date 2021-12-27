from numpy.core.fromnumeric import prod
import requests
import numpy 


response = requests.get("http://api.eia.gov/series/?series_id=NG.N3010WI2.M&api_key={API}&category_id=480302")
jsonResponse = response.json()
dataArray = jsonResponse['series'][0]['data']

prodMonthComplete = []
consumptionComplete = []

for i in dataArray:
    prodMonthComplete.append(i[0])

for i in dataArray:
    consumptionComplete.append(i[1])

n = 60
prodMonth5Year = prodMonthComplete[:n]
consumption5Year = consumptionComplete[:n]

n=12
prodMonthStartMonth = prodMonth5Year[::n]
prodMonthSecondMonth = prodMonth5Year[1::n]
prodMonthThirdMonth = prodMonth5Year[2::n]
prodMonthFourthMonth = prodMonth5Year[3::n]
prodMonthFifthMonth = prodMonth5Year[4::n]
prodMonthSixthMonth = prodMonth5Year[5::n]
prodMonthSeventhMonth = prodMonth5Year[6::n]
prodMonthEigthMonth = prodMonth5Year[7::n]
prodMonthNinthMonth = prodMonth5Year[8::n]
prodMonthTenthMonth = prodMonth5Year[9::n]
prodMonthEleventhMonth = prodMonth5Year[10::n]
prodMonthTwelvthMonth = prodMonth5Year[11::n]

consumptionStartMonth = consumption5Year[::n]
consumptionSecondMonth = consumption5Year[1::n]
consumptionThirdMonth = consumption5Year[2::n]
consumptionFourthMonth = consumption5Year[3::n]
consumptionFifthMonth = consumption5Year[4::n]
consumptionSixthMonth = consumption5Year[5::n]
consumptionSeventhMonth = consumption5Year[6::n]
consumptionEigthMonth = consumption5Year[7::n]
consumptionNinthMonth = consumption5Year[8::n]
consumptionTenthMonth = consumption5Year[9::n]
consumptionEleventhMonth = consumption5Year[10::n]
consumptionTwelvthMonth = consumption5Year[11::n]

print(prodMonthStartMonth)
print(prodMonthSecondMonth)

