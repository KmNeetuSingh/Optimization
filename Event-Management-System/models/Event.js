const mongoose = require('mongoose');
const Organizer = require('./Organizer');
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    location: { type: String },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'Organizer' },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Registration'
    }]
});
module.exports = mongoose.model('Event', eventSchema);