FROM node:21-slim

WORKDIR /usr/src/app

RUN npm install -g gatsby-cli

COPY / ./

RUN npm install

RUN npm run build

EXPOSE 8081

ENV NODE_ENV=production

ENV PORT=8081

CMD ["npm", "run", "start"]