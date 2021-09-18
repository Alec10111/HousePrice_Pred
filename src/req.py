import requests

url = 'http://127.0.0.1:8000/predict'

data = {'YearBuilt':1990, 'TotalBath': 1, 'BedroomAbvGr': 5, 'YearRemodAdd' : 2000}

resp = requests.post(url, json=data)
print(resp.json())