const mongoose = require('mongoose');
const userSchema = newMongoose.Schema({
    userName: {
        type: String, required: true, unique: true
    },
    email: { type: String, required: true, unique: true },
    borrowed_books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
});
module.exports = mongoose.model('User, userSchema');
