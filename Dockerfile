FROM node:10.15.0-alpine

COPY . /inspirobot-slack
WORKDIR /inspirobot-slack
ENTRYPOINT npm start
