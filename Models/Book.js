const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  ISBN: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  reviews: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String
  }]
});

module.exports = mongoose.model('Book', bookSchema);