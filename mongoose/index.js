// index.js
const express = require('express');
const connectDB = require('./config/mongoose'); 
const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Hello, world!");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
