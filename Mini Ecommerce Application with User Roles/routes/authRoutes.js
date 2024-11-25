const express = require("express");
const { register, login, logout } = require("../controllers/authControllers");
const authRouter = express.Router();

// POST request to register a new user
authRouter.post("/register", register);

// POST request to log in an existing user
authRouter.post("/login", login);

// POST request to log out the user
authRouter.post("/logout", logout);

module.exports = authRouter;
