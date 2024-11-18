const mongoose = require ('mongoose');

const transactionSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  borrow_date: { type: Date, default: Date.now },
  return_date: { type: Date, default: null }
});

module.exports = mongoose.model('Transaction', transactionSchema);
