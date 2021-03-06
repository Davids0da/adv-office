FROM node:boron

RUN mkdir /app
WORKDIR /app 

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 6001
CMD [ "npm", "start" ] 