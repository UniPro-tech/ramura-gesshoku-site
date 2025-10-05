FROM node:24-slim

RUN apt-get update && apt-get install -y \
  zip \
  unzip \
  curl

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /nextjs

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next
RUN bun install
RUN npm run build

CMD ["bun", "start"]