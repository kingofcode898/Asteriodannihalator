import uvicorn
from typing import Optional

from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/sample_image")
def get_image():
    return str("https://api.nasa.gov/assets/img/general/apod.jpg")

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000, log_level="info", reload = true)

