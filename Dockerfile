FROM python:3.9

ENV PORT 8000

FROM python:3.9.2
RUN mkdir /app
WORKDIR /app

COPY requirments.txt /app/requirments.txt
RUN pip install --upgrade pip && pip install -r requirments.txt
COPY . /app

EXPOSE 8000


RUN chmod +x start.sh

CMD ["./start.sh"]