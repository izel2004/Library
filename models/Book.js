// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, 'ISBN is required.'],
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  author: {
    type: String,
    required: [true, 'Author is required.']
  },
  copies: {
    type: Number,
    required: [true, 'Copies count is required.'],
    min: [0, 'Copies cannot be negative.']
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);