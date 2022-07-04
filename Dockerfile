
FROM python:latest

RUN  pip install --upgrade pip

RUN mkdir /code
WORKDIR /code

COPY requirements.txt /code/
RUN  pip freeze > requirements.txt

COPY . /code/

CMD python application.py
EXPOSE 3000
