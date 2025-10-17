const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  loanedAt: {
    type: Date,
    default: Date.now
  },
  dueAt: {
    type: Date,
    required: true
  },
  returnedAt: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['Active', 'Returned', 'Overdue'],
    default: 'Active'
  }
});

module.exports = mongoose.model('Loan', loanSchema);