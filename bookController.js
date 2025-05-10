// Task 2: Get book by ISBN
exports.getBookByISBN = async (req, res) => {
    try {
      const book = await Book.findOne({ ISBN: req.params.isbn });
      if (!book) {
        return res.status(404).json({ 
          success: false,
          message: 'Book not found with this ISBN'
        });
      }
      res.status(200).json({
        success: true,
        data: book
      });
    } catch (err) {
      res.status(500).json({ 
        success: false,
        message: err.message 
      });
    }
  };
  const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Task 2 route
router.get('/isbn/:isbn', bookController.getBookByISBN);

module.exports = router;