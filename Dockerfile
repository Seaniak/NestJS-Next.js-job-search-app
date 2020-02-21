FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./frontend/package*.json ./

# Install dependencies
RUN npm install 

# Copy all files
COPY ./frontend ./

# Expose the listening port
EXPOSE 80 3000

# Build app
RUN npm run dev

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
#CMD [ "dev", "start", "npm", "--", "start" ]

