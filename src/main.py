from fastapi import FastAPI
from joblib import load
from pydantic import BaseModel

# cargamos el modelo
pipe = load('/Users/David/HousePrice_Pred/src/model_1.joblib')


def get_prediction(params):
    x = [[params.YearBuilt, params.TotalBath, params.BedroomAbvGr,params.YearRemodAdd]]
    y = pipe.predict(x)[0]  # just get single value
    return {'prediction': y}


# initiate API
app = FastAPI()


# Definimos una clase anotando los tipos de las features
class ModelFeatures(BaseModel):
    TotalBath: int
    BedroomAbvGr: int
    YearRemodAdd: int
    YearBuilt: int

@app.post("/predict")
def predict(params: ModelFeatures):
    prediction = get_prediction(params)
    return prediction