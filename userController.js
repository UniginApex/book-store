const User = require('../models/User');
const Book = require('../models/Book');

// Task 6: Register
exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Task 8: Add review
exports.addReview = async (req, res) => {
  try {
    const book = await Book.findOne({ ISBN: req.params.isbn });
    book.reviews.push({ userId: req.user.id, text: req.body.review });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};