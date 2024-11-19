const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  registrations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Registration' }]
});

module.exports = mongoose.model('Attendee', attendeeSchema);
  