FROM node:8.6-slim
WORKDIR /usr/src/app
# Copy across client package.json
RUN mkdir client
COPY ./client/package.json client/package.json
# Copy the yarn lock file if using yarn
COPY ./client/yarn.lock client/yarn.lock
# Install client dependancies
RUN npm install:client

# Copy server package.json
COPY package.json .
# Copy server yarn.lock
COPY yarn.lock .
# Install server dependancies
RUN npm install:server

# Copy client files
COPY client/public client/public
COPY client/src client/src

# Build client
RUN npm build:client

# Copy server 
COPY ./bin bin
COPY ./routes routes
COPY ./app.js app.js

CMD npm start