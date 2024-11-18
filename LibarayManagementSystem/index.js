require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const libraryRoutes = require('./routes/libraryRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api', libraryRoutes);

// Start Server
const PORT = process.env.PORT || 3000;  
const MONGO_URI = process.env.MONGO_URI; // MongoDB URI from the .env file

// Connect to MongoDB using the URI from .env
connectDB(MONGO_URI);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
