FROM node

COPY package.json /node-app/
COPY src /node-app/

WORKDIR /node-app/

RUN npm install

CMD ["node","server.js"]