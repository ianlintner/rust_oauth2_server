#!/bin/bash
# Script to run Flyway migrations

set -e

echo "Running Flyway migrations..."

# Check if Flyway is available
if ! command -v flyway &> /dev/null; then
    echo "Flyway not found. Using Docker to run migrations..."
    
    # Run Flyway via Docker
    docker run --rm \
        -v "$(pwd)/migrations/sql:/flyway/sql" \
        -v "$(pwd)/flyway.conf:/flyway/conf/flyway.conf" \
        flyway/flyway:10-alpine \
        migrate
else
    echo "Using local Flyway installation..."
    flyway -configFiles=flyway.conf migrate
fi

echo "Migrations completed successfully!"
