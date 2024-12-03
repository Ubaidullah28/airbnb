const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');  // Import the JWT middleware
const User = require('../models/User');
const router = express.Router();

// GET /api/user/profile - Get user profile (protected route)
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Access user information from the JWT (req.user contains the decoded token)
    const user = await User.findById(req.user.userId);
    res.json(user);  // Send user profile
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

module.exports = router;
