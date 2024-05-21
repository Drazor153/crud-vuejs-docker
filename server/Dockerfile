FROM node:20-slim
RUN npm i -g pnpm
WORKDIR /usr/src/app
COPY package*.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD [ "pnpm", "dev" ]