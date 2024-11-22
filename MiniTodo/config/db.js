const mongoose = require('mongoose');
const mongoUri = "mongodb://127.0.0.1:27017/database";
const connect = async () => {
    try{
        await mongoose.connect(mongoUri)
        console.log("DB Connected Successfully")
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connect;
