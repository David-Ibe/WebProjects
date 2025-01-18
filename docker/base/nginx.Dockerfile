# Base Nginx image for serving static content
FROM nginx:alpine

# Install basic utilities
RUN apk add --no-cache \
    curl \
    bash

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set up Nginx configuration directory
RUN mkdir -p /etc/nginx/templates
RUN chown -R appuser:appgroup /etc/nginx/templates

# Switch to non-root user
USER appuser
