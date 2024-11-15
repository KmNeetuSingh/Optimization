const mongoose = require("mongoose");
const monogUri = "mongodb://127.0.0.1:27017/database"
const connect =  async () => {
    try{
        await mongoose.connect(monogUri);
        console.log("DB Connected");
    }
    catch(err){
        console.log(err);


    }
}
module.exports = connect;
