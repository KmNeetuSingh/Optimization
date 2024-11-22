const express = require('express');  
const mongoose = require('mongoose');  
const userRoutes = require('./routes/userRoutes');  
const connectDB = require('./config/db');  

const app = express();  
app.use(express.json());  


connectDB();  

// User routes  
app.use('/api/users', userRoutes);  
 
const PORT = 3000;  
app.listen(PORT, () => {  
  console.log(`Server running on http://localhost:${PORT}`);  
});  
