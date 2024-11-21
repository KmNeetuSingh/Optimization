const mongoose = require("mongoose");

const connect = async () => {
    try {
        const mongoUri = process.env.MONGOURI;
        await mongoose.connect(mongoUri);
        console.log("DB Connected");
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connect;
