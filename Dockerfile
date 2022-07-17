FROM python:3

WORKDIR /Users/tieuanh/Desktop/Workspace/BackendWeb/backEndHPT
EXPOSE 80

COPY requirements.txt ./
RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt


COPY . .

CMD [ "python", "./application.py" ]