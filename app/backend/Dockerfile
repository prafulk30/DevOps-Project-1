# __define-ocg__: multi-stage build for smaller runtime image
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

# __define-ocg__: container port (application listens here inside container)
EXPOSE 5030 

COPY --from=build /app .
CMD ["node", "src/server.js"]
