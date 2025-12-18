# Location: /Frontend/Dockerfile

# FIX: Changed from 18 to 22 to satisfy Vite requirements
FROM node:22-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Start Vite
CMD ["npm", "run", "dev", "--", "--host"]