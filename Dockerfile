# ---- Base ----
FROM node:24-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# ---- Dependencies ----
FROM base AS dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM dependencies AS build
COPY . .
RUN pnpm build

# ---- Production Dependencies ----
FROM base AS prod-dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# ---- Production ----
FROM base AS production
COPY --from=build /app/build ./build
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "build/index.js"]
