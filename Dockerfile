# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8081 to the outside world
EXPOSE 8081

# Set the command to run the Node.js application
CMD ["npm", "start", "--port", "8081"]