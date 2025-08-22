FROM node:15.1.0
WORKDIR /src
COPY package.json package.json
RUN yarn
COPY . .
CMD ["npm", "run", "start"]