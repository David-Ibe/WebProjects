# Base Node.js image for both frontend and backend services
FROM node:20-alpine

# Install common development tools and utilities
RUN apk add --no-cache \
    git \
    curl \
    bash \
    && npm install -g \
    typescript \
    ts-node \
    nodemon

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set environment variables
ENV NODE_ENV=development
ENV PATH /app/node_modules/.bin:$PATH
