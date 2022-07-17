FROM node:16

WORKDIR /Users/tieuanh/Desktop/Workspace/BackendWeb/Mellifluous

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm install -g npm@8.14.0
RUN npm i --force
# RUN npm run server
EXPOSE 5001

CMD [ "npm", "run", "server" ]