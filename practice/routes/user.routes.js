const express = require("express");
const router = express.Router();
const User = require("../models/user.model"); // Ensure this points to your User model
var jwt = require('jsonwebtoken'); // JWT for token generation

// Register User
router.post("/Register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user and save it to the database
        const user = new User({ username, password });
        await user.save();

        res.json({
            message: "User Registration Successful"
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Login User
router.post("/Login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found by this name" });
        }

        // Compare the password with the stored one
        if (user.password !== password) {
            return res.status(401).json({ message: "Wrong password" });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({
            message: "You are logged in successfully",
            token: token // Send the token in the response
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
