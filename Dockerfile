FROM node:22-alpine AS base

# Stage 1: Build
FROM base AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --ignore-scripts

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM base AS production

# Install security updates
RUN apk update && apk upgrade --no-cache

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nuxt -u 1001 -G nodejs

WORKDIR /app

# Copy built application from builder stage with proper ownership
COPY --from=builder --chown=nuxt:nodejs /app/.output /app/.output

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Drop privileges - run as non-root user
USER nuxt

EXPOSE 3000

# Use dumb-init to handle signals properly (optional but recommended)
# Healthcheck for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the application
CMD ["node", ".output/server/index.mjs"]
