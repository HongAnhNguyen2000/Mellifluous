
FROM python:3.8-alpine

RUN pip install --upgrade pip 

WORKDIR /docker

COPY requirements.txt /docker/requirements.txt
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY . .

EXPOSE 8000

CMD ["python","./application.py"]

