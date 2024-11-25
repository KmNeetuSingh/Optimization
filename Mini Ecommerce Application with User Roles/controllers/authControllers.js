const User = require("../models/User");
const { generateToken } = require("../utils/jwtUtils");

// User registration route
exports.register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({ email, password, role });
    await newUser.save();

    // Generate JWT token for the new user
    const token = generateToken(newUser._id, newUser.role);

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User login route
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token for the authenticated user
    const token = generateToken(user._id, user.role);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User logout route
exports.logout = async (req, res) => {
  try {
    // Invalidate the user's JWT by adding it to a blacklist (You can use a Redis database or in-memory store for blacklist)
    // For simplicity, we won't implement blacklist logic here. In production, consider adding JWT to a blacklist on logout.

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
