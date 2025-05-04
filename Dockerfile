FROM node:23

# Create app directory
WORKDIR /rmahelpdesk

# Copy package files first (for better layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
# (This will respect .dockerignore)
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]