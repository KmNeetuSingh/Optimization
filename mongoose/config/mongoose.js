const mongoose = require('mongoose');
const mongoUri = "mongoo('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3 ')"
  
const connect = () => {
    return  mongoose.connect(mongoUri).then (() => {
        console.log("Connected to MongoDB")
    }).catch (err => {
        console.log(err)
    });
}
module.exports =connect;
