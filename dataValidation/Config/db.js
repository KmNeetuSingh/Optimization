const mongoose = require('mongoose');
const mongoUri = "";
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