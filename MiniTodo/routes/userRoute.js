const express = require("express");
const userRoutes = express.Router();
const userModel = require("../models/usermodel"); 
userRoutes.get("/list", async (req, res) => {
    try {
        let data = await userModel.find();
        res.json({
            msg: "List of users",
            data: data
        });
    } catch (err) {
        res.status(500).json({
            msg: "Error fetching users",
            error: err.message
        });
    }
});

module.exports = userRoutes; 
