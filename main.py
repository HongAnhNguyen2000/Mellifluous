from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from routes import subject_route, student_route



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(subject_route.router)
app.include_router(student_route.router)


@app.get('/')
def root():
    return {'message': 'Hello, world'}


