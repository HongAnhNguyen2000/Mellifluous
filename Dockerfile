
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

RUN  pip install --upgrade pip

RUN mkdir /code
WORKDIR /code

RUN  pip3 freeze > requirements.txt

COPY . /code/

CMD python application.py
EXPOSE 3000


