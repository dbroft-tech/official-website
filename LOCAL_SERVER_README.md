# Local Server Setup for D-Broft Technologies Website

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation Steps
1. Open your terminal/command prompt
2. Navigate to the project directory
3. Run the following commands:

```bash
# Install dependencies
npm install

# Start the local server
npm start

# For development with auto-reload
npm run dev
```

## Server Details
- **Port**: 3000
- **URL**: http://localhost:3000

## 404 Page Handling
- Any non-existent route will automatically serve the custom 404.html page
- The server is configured to handle both file and route-based 404 errors

## Troubleshooting
- Ensure all dependencies are installed
- Check that no other service is running on port 3000
- Verify Node.js and npm are correctly installed

## Stopping the Server
- Press `Ctrl+C` in the terminal
