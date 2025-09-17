#!/bin/sh

echo "=== Frontend Container Starting ==="
echo "Current directory: $(pwd)"
echo "Environment variables:"
env | grep REACT_APP

# Replace placeholder with actual API URL
if [ ! -z "$REACT_APP_API_URL" ]; then
  echo "Setting API URL to: $REACT_APP_API_URL"
  # Update config.json with runtime value
  echo "{\"apiUrl\": \"$REACT_APP_API_URL\"}" > /app/build/config.json
  echo "Config file created:"
  cat /app/build/config.json
else
  echo "No REACT_APP_API_URL environment variable found"
fi

echo "Starting serve..."
# Start the server
serve -s build -l 3000