const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String, required: true, unique: true
    },
    published_year: Number,
    genre: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Auhtor' }
});
module.exports = mongoose.models('Book', bookSchema);