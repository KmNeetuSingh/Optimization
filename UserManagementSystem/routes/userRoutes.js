const express = require('express');  
const bcrypt = require('bcrypt');  
const User = require('../models/Users');  

const router = express.Router();  

// Register a new user  
router.post('/register', async (req, res) => {  
  try {  
    const { email, password, dob, mobileNumber } = req.body;  

    const existingUser = await User.findOne({ email });  
    if (existingUser) {  
      return res.status(400).json({ message: 'Email already registered' });  
    }  

    const user = new User({ email, password, dob, mobileNumber });  
    await user.save();  
    res.status(201).json({ message: 'User registered successfully' });  
  } catch (error) {  
    res.status(500).json({ error: error.message });  
  }  
});  

// Get user details by email (excluding password)  
router.get('/:email', async (req, res) => {  
  try {  
    const user = await User.findOne({ email: req.params.email }).select('-password');  
    if (!user) {  
      return res.status(404).json({ message: 'User not found' });  
    }  
    res.status(200).json(user);  
  } catch (error) {  
    res.status(500).json({ error: error.message });  
  }  
});  

// Reset password  
router.post('/resetpassword', async (req, res) => {  
  try {  
    const { email, dob, mobileNumber, newPassword } = req.body;  

    const user = await User.findOne({ email });  
    if (!user || (user.dob && user.dob.toISOString() !== new Date(dob).toISOString()) ||  
      (user.mobileNumber && user.mobileNumber !== mobileNumber)) {  
      return res.status(400).json({ message: 'Invalid user details' });  
    }  

    const salt = await bcrypt.genSalt(10);  
    user.password = await bcrypt.hash(newPassword, salt);  
    await user.save();  

    res.status(200).json({ message: 'Password reset successfully' });  
  } catch (error) {  
    res.status(500).json({ error: error.message });  
  }  
});  

module.exports = router;  
