const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

// /api/members route
router.route('/')
  .get(memberController.getMembers)    // GET all members
  .post(memberController.createMember); // POST a new member

// /api/members/:id route
router.route('/:id')
  .get(memberController.getMember)     // GET single member
  .put(memberController.updateMember)  // UPDATE member
  .delete(memberController.deleteMember); // DELETE member

module.exports = router;