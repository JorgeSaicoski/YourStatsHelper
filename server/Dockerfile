
FROM node:16-alpine as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:16-alpine

ENV NODE_ENV production

USER node

WORKDIR /home/node

COPY --from=builder /home/node/package*.json ./

COPY --from=builder /home/node/node_modules/ ./node_modules/

COPY --from=builder /home/node/dist/ ./dist/

CMD ["node", "dist/main.js"]
