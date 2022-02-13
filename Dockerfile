FROM node:16
WORKDIR /app
VOLUME /app/src
COPY package.json /app
RUN npm install -g nodemon && npm install
CMD nodemon src/app.js
EXPOSE 8081
