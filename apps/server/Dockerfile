FROM node:22.13-alpine3.21 AS base
WORKDIR /app

ARG VITE_API_URL

# Base installer
FROM base AS installer
ENV COREPACK_INTEGRITY_KEYS=0
RUN corepack enable
COPY . .

# Build stage
FROM installer AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm --filter=web build
RUN pnpm --filter=server build --ignore-ts-errors
RUN pnpm deploy --filter=server --prod /prod/server

# Production stage
FROM base
ENV NODE_ENV=production
COPY --from=build /prod/server/node_modules /app/node_modules
COPY --from=build /app/apps/server/build .
EXPOSE 3333
CMD ["node", "./bin/server.js"]