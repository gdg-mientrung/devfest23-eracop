from typing import Union

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
import json

with open('data.json') as read:
    read_json = json.load(read)
    

@app.get("/")
def read_root():
    return {"data":read_json}

@app.get("/search")
def read_root(param: str = Query(..., title="Query Parameter")):
   filtered_array = [item for item in read_json if item["Category"] == param]
   return {"data": filtered_array}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}