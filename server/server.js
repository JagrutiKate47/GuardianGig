const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const proxy = httpProxy.createProxyServer();
const PORT = process.env.PORT || 3001;

// Example route to check backend connectivity
app.get('/api/check', (req, res) => {
    res.json({ message: 'Backend is connected!' });
});

// Proxy requests to the React development server
app.all('*', (req, res) => {
    proxy.web(req, res, {
        target: 'http://localhost:5137', // Your React development server URL
        changeOrigin: true,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
