const Transaction = require('../models/transactModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');

exports.borrowBook = async (req, res) => {
  try {
    const { bookId, userId } = req.body;

    const transaction = new Transaction({ book: bookId, user: userId });
    await transaction.save();

    await User.findByIdAndUpdate(userId, { $push: { borrowed_books: transaction._id } });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { transactionId } = req.body;

    const transaction = await Transaction.findByIdAndUpdate(transactionId, { return_date: new Date() });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
