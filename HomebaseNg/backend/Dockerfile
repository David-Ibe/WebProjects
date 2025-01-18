# Build stage
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# If TypeScript is used, build the project
RUN npm run build

# Expose the port your app runs on
EXPOSE 1000

# Start the application
CMD ["npm", "start"]
