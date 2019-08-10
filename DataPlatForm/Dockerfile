
FROM node:8.11.3-jessie

ENV BASE=/usr/src/app/
RUN mkdir -p $BASE && mkdir -p $BASE/logs
WORKDIR /usr/src/app

COPY package.json $BASE
ENV NODE_ENV=production

COPY . $BASE
RUN cd ./api/mocks/nodejs && npm install && cd $BASE

EXPOSE 10010
CMD [ "npm", "run", "mocks:start" ]
