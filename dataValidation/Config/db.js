const mongoose = require('mongoose');
const mongoUri = "mongodb+srv://neetusingh99590:uE2D4dtqwmc3pArj@cluster0.alpks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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