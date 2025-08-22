FROM node:18.18.0
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build-prod
EXPOSE 3000
CMD ["npm", "run", "start"]

