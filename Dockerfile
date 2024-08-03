# Use the official Bun image as the base image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and bun.lockb files first to leverage Docker's cache
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN bun next build

# Run prisma generate
RUN bun prisma:gen

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the application
CMD ["bun", "next", "start"]