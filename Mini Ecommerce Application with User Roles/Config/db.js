const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/ecommerece";
const connect = async() => {
    try{
      await mongoose .connect(mongoUri,);
      console.log("Connected to MongoDB")
      
    }
    catch(err){
        console.log("Error")

    }
}
module.exports= connect;