FROM node:18.18.0
WORKDIR /src
COPY package.json package.json
RUN npm i
COPY . .
CMD ["npm", "run", "start"]