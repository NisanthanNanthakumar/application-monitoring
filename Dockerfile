FROM node:14.14.0-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json .
COPY ./react/package.json ./react
COPY ./express/package.json ./express

RUN yarn

COPY . .

EXPOSE 8088 3000

CMD [ "yarn", "run", "start" ]