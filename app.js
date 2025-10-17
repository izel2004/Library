// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Import routes
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const loanRoutes = require('./routes/loanRoutes'); // ✅ Add this line

// Route connections
app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/loans', loanRoutes); // ✅ Add this line

// Test route
app.get('/', (req, res) => {
  res.send('✅ API is running!');
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));