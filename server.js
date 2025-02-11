const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve static files from specific directories
app.use('/page', express.static(path.join(__dirname, 'page')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Route for the main pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for pages in the 'page' directory
app.get('/page/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'page', page);
    
    // Check if the file exists
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        // If file doesn't exist, send 404 page
        res.status(404).sendFile(path.join(__dirname, '404.html'));
    }
});

// Catch-all route for 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Server is shutting down...');
    process.exit(0);
});
