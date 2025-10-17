const mongoose = require('mongoose');

// Define the schema (fields for the user)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
}, { timestamps: true });

// Create and export the model
module.exports = mongoose.model('User', userSchema);