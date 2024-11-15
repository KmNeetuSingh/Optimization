const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/database';
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