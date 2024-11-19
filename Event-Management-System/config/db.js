const mongoose = require('mongoose');
require('dotenv').config(); 
const mongoUri = process.env.MONGO_URi;
const connect = async  () => {
    try{
        await mongoose.connect(mongoUri);
        console.log("DB Connected");

    }
    catch(err){
        console.log(err);
    }
}
module.exports = connect;