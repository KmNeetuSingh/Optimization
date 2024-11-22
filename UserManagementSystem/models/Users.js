const mongoose = require('mongoose');  
const bcrypt = require('bcrypt');  

const userSchema = new mongoose.Schema({  
  email: { type: String, unique: true, required: true },  
  password: { type: String, required: true },  
  dob: { type: Date },  
  mobileNumber: { type: String },  
});  

// Hash password before saving the user  
userSchema.pre('save', async function (next) {  
  if (!this.isModified('password')) return next();  
  const salt = await bcrypt.genSalt(10);  
  this.password = await bcrypt.hash(this.password, salt);  
  next();  
});  

module.exports = mongoose.model('User', userSchema);  