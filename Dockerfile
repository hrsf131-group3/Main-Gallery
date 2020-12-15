FROM node:14.15.1-alpine3.10

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm -g install nodemon

RUN npm run build

EXPOSE 8040

CMD ["npm", "start"]