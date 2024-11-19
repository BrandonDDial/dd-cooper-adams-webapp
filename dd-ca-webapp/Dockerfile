# FILE: Dockerfile

# Use an official node image as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Load environment variables
RUN echo "DOCKER_USERNAME=${DOCKER_USERNAME}" >> /etc/environment
RUN echo "DOCKER_PASSWORD=${DOCKER_PASSWORD}" >> /etc/environment

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]