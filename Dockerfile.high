# Install dependencies only when needed
FROM node:16.14-alpine3.15
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat git
WORKDIR /app
COPY . .

RUN yarn install --immutable
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn high build

ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
