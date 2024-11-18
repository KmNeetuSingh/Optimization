const mongoose = require('mongoose');
const busSchema = new mongoose.Schema({
  bus_number: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  operator: { type: mongoose.Schema.Types.ObjectId, ref: 'Operator', required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
});

module.exports = mongoose.model('Bus', busSchema);
