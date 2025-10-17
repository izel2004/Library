// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// /api/loans
router.route('/')
  .get(loanController.getLoans)      // GET all loans
  .post(loanController.createLoan);  // POST new loan

// /api/loans/:id
router.route('/:id')
  .get(loanController.getLoan)       // GET one loan
  .put(loanController.updateLoan)    // UPDATE
  .delete(loanController.deleteLoan); // DELETE

module.exports = router;