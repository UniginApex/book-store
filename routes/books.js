const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Task 1: Get all books
router.get('/', bookController.getAllBooks);

// Task 2: Get by ISBN
router.get('/isbn/:isbn', bookController.getBookByISBN);

// Task 3: Get by author
router.get('/author/:author', bookController.getBooksByAuthor);

// Task 4: Get by title
router.get('/title/:title', bookController.getBooksByTitle);

// Task 5: Get reviews
router.get('/reviews/:isbn', bookController.getBookReviews);

module.exports = router;