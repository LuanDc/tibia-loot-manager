FROM node:18-alpine as base

WORKDIR /app

COPY package.json package.json

FROM base as test
RUN yarn install --frozen-lockfile
COPY . .
CMD ["yarn", "test"]
