FROM node:alpine    
EXPOSE 5005
COPY /data/db.json /opt/mockBackend.json
RUN yarn global add json-server
CMD ["json-server", "-H", "0.0.0.0", "/opt/mockBackend.json"]