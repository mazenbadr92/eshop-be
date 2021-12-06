FROM node:14.17
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
RUN npm install -g typescript
RUN npm install -g typeorm@0.2.41
COPY ./package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
RUN tsc
CMD ["node","./eshop/dist/app.js"]
