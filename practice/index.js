const express = require('express');
const connect = require('./config/db');
const userRouter = require('./routes/user.routes');
const auth = require('./middleware/auth'); // Import the auth middleware
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if no port is set in .env

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use("/users", userRouter); // User routes

// Protected route - /private-data
app.get("/private-data", auth, (req, res) => {
    res.send("Private Data");
});

// Health check route
app.get("/health", (req, res) => {
    res.send("ok!");
});

// Start server
app.listen(port, async () => {
    try {
        await connect(); // Database connection
        console.log(`Server Started on port ${port}`);
    } catch (err) {
        console.error("Failed to start the server:", err.message);
    }
});
