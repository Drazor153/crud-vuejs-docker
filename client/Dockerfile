FROM node:20-slim as build-stage
RUN npm i -g pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY ./ .
RUN pnpm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf