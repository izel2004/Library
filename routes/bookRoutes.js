// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// /api/books
router.route('/')
  .get(bookController.getBooks)
  .post(bookController.createBook);

// /api/books/:id
router.route('/:id')
  .get(bookController.getBook)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;