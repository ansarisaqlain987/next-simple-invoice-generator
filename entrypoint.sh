#!/bin/sh
# entrypoint.sh

# Run migrations
bun migration:run

# Run the main container command
exec "$@"