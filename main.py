from fastapi import FastAPI 
from routes import subject_route


app = FastAPI()
app.include_router(subject_route.router)

@app.get('/')
def root():
    return {'message': 'Hello, world'}


