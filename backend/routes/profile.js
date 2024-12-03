const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');  // Import the authMiddleware
const router = express.Router();

// Protected route example
router.get('/profile', authMiddleware, (req, res) => {
  // If the middleware verifies the JWT, the user will be attached to req.user
  res.json({ user: req.user });  // Send back user details
});

module.exports = router;
