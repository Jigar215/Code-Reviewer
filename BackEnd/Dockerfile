# Location: /BackEnd/Dockerfile

FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the backend code
COPY . .

# Expose port 5000 (Matches your backend port)
EXPOSE 5000

# Start the server using server.js
CMD ["npx", "nodemon", "server.js"]