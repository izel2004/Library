// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // ✅ Use process.env.MONGODB_URI directly here
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      console.error('❌ MONGODB_URI is missing inside db.js');
      process.exit(1);
    }

    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection FAILED:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;