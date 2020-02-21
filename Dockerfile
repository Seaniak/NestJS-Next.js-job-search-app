FROM node:alpine

# Set working directory
WORKDIR /usr/src/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
#COPY ./frontend/package*.json ./
COPY ./express-api/package*.json ./
#COPY ./api/package*.json ./

# Install dependencies
RUN npm install 

# Copy all files
#COPY ./frontend ./
COPY ./express-api ./
#COPY ./api/src ./

EXPOSE 3000 3003 3306

# Build app
#RUN npm run dev

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
#CMD [ "dev", "start", "npm", "--", "start" ]


#CMD ["npm", "run dev"]