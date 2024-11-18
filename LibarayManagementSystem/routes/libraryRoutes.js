const express = require('express');
const {
  addAuthor,
  addBook,
  addUser,
  borrowBook,
  returnBook,
  listBooksByAuthor,
  listBorrowedBooks
} = require('../controllers/libraryController');  // Correct import

const router = express.Router();

// Define the routes
router.post('/authors', addAuthor);
router.post('/books', addBook);
router.post('/users', addUser);
router.post('/borrow', borrowBook);
router.post('/return', returnBook);
router.get('/books/:authorId', listBooksByAuthor);
router.get('/borrowed/:userId', listBorrowedBooks);

module.exports = router;
