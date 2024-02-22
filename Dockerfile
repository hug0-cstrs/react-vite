FROM node:18-alpine

WORKDIR /src/portfolio-app

COPY package*.json ./

RUN npm install --force

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]