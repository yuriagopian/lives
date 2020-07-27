FROM node:12.18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /app

CMD [ "npm", "start" ]