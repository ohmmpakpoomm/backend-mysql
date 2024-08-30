# Dockerfile

# Use an official Node.js image as the base image
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or pnpm/yarn equivalents)
COPY package*.json ./

# Install dependencies only (no devDependencies) for production
RUN npm install --production

# Copy the application source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Use a smaller runtime image for production
FROM node:20-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files from the builder stage
COPY --from=builder /app /app

# Expose the port the app runs on
EXPOSE 3000


