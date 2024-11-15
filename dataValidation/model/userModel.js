const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [3, 'Name must have at least 3 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Email must be a valid format'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
  },
  age: {
    type: Number,
    min: [18, 'Age must be at least 18'],
    max: [65, 'Age must not exceed 65'],
    validate: {
      validator: Number.isInteger,
      message: 'Age must be an integer',
    },
  },
});

module.exports = mongoose.model('User', userSchema);
