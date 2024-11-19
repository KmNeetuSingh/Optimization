const express = require('express');
const app = express();
require('dotenv').config();

const mongoDB = require('./config/db');
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
    res.send("Server is Running!");
});

app.listen(PORT, async () => {
    try {
        await mongoDB();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1);
    }
});
