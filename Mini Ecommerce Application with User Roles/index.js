const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./Config/db")
dotenv.config();

const app = express();
app.use(express.json()); 
const authRoutes = require("./routes/authRoutes");

// Use routes
app.use("/auth", authRoutes);


    app.listen(5000, async() => {
        await connectDb();
      console.log("Server running on port 5000");
    });

