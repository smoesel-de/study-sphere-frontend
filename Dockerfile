FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY package*.json .
RUN pnpm i
COPY . .
RUN pnpm run build
RUN pnpm prune --production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]