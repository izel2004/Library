// controllers/loanController.js
const Loan = require('../models/Loan');

// Get all loans
exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find().populate('bookId memberId');
    res.status(200).json(loans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one loan
exports.getLoan = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id).populate('bookId memberId');
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.status(200).json(loan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new loan
exports.createLoan = async (req, res) => {
  try {
    const { memberId, bookId } = req.body;

    // Auto set due date to 7 days later
    const dueAt = new Date();
    dueAt.setDate(dueAt.getDate() + 7);

    const loan = await Loan.create({
      memberId,
      bookId,
      dueAt,
      status: 'Active',
    });

    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update loan
exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.status(200).json(loan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete loan
exports.deleteLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndDelete(req.params.id);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });
    res.status(200).json({ message: 'Loan deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};