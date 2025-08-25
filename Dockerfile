# STAGE 1
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2
FROM node:20-alpine AS prod-stage
WORKDIR /app
COPY --from=build-stage /app ./
EXPOSE 8080
CMD ["npm", "start"]
