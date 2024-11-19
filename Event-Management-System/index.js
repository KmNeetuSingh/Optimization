const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = require('./config/db');  
const router = require('./routes/routes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health-check-route
app.get("/health", (req, res) => {
    res.send("Server is Running!");
});
app.use('/api', router);  

// Start the server
app.listen(PORT, async () => {
    try {
        await mongoDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);
    }
});
