
FROM python:3.8-alpine

# RUN pip install --upgrade pip 
RUN apt-get update

WORKDIR /docker

COPY requirements.txt /docker/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY . .

EXPOSE 8000

CMD ["python","./application.py"]

