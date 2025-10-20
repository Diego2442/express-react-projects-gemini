FROM node:22-alpine

ENV DIR /app-express
WORKDIR $DIR 

COPY . $DIR

RUN npm install

RUN npm run build

RUN npm prune --production

EXPOSE 4000

CMD ["npm", "start"]
