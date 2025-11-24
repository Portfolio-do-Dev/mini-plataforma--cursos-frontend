# ----- Build stage -----
FROM node:20-alpine AS builder
ARG PNPM_VERSION=10.22.0

RUN apk add --no-cache python3 make g++ \
    && corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build


# ----- Runtime stage -----
FROM node:20-alpine AS runner
ENV PNPM_VERSION=10.22.0

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

# apenas as deps de produção
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# copiar somente o necessário
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production

CMD ["pnpm", "start"]
