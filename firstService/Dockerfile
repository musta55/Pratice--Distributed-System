FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
RUN npm install axios
COPY . /usr/src/app
# EXPOSE  8080
CMD ["node", "app.js"]