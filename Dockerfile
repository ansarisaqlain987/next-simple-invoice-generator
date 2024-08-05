# Use the official Bun image as the base image
FROM oven/bun:latest

ENV APP_URL=${APP_URL}
ENV AUTHA_APP_SECRET=${AUTHA_APP_SECRET}
ENV AUTH_APP_ID=${AUTH_APP_ID}
ENV AUTH_ENDPOINT=${AUTH_ENDPOINT}
ENV COOKIE_SECRET=${COOKIE_SECRET}
ENV DATABASE_URL=${DATABASE_URL}
ENV DB_HOST=${DB_HOST}
ENV DB_NAME=${DB_NAME}
ENV DB_PASS=${DB_PASS}
ENV DB_PORT=${DB_PORT}
ENV DB_USER=${DB_USER}
ENV NODE_ENV=${NODE_ENV}

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and bun.lockb files first to leverage Docker's cache
COPY . ./

# Install dependencies
RUN bun install

# Run prisma generate
RUN bun prisma:gen

# Build the Next.js application
RUN bun next build

# Run prisma generate
RUN bun prisma:gen

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the application
CMD ["bun", "next", "start"]