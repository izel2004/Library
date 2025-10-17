// controllers/bookController.js
const Book = require('../models/Book');

// GET all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one book by ID
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found.' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a new book
exports.createBook = async (req, res) => {
  try {
    const { isbn, title, author, copies } = req.body;

    if (!isbn || !title || !author || copies === undefined) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingBook = await Book.findOne({ isbn });
    if (existingBook) {
      return res.status(400).json({ message: 'ISBN already exists.' });
    }

    const book = new Book({ isbn, title, author, copies });
    const createdBook = await book.save();

    res.status(201).json(createdBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE a book by ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!book) return res.status(404).json({ message: 'Book not found.' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE a book by ID
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found.' });
    res.status(200).json({ message: 'Book deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};