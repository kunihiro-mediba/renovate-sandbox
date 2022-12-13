FROM node:19.2.0-bullseye-slim
ENV NODE_ENV=development
COPY . /app
WORKDIR /app
RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 8080
CMD ["node", "./dist/main.js"]
