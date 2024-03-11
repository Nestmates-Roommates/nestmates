FROM node:latest

WORKDIR /docker-backend

COPY package*.json tsconfig.json ./

RUN npm install

COPY . ./

EXPOSE 5000
