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

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN bunx prisma generate

# Build the Next.js application
RUN bun next build

# Expose the port the app runs on
EXPOSE 3000

# Run Knex migration scripts
RUN bunx knex migrate:latest

# Start the Next.js application
CMD ["bun", "next", "start"]