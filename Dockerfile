FROM node:carbon

WORKDIR /usr/src/app

COPY dist ./dist

COPY node_modules ./node_modules
COPY package.json .
COPY src/build/scripts/decorator.js ./src/build/scripts/decorator.js
COPY src/build/scripts/envSettings.js ./src/build/scripts/envSettings.js

EXPOSE 8080
CMD ["yarn", "start-express"]
