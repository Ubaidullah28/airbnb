// const express = require('express');
// const User = require('../models/User'); // Import the User model
// const bcrypt = require('bcryptjs'); // For hashing passwords
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// // Route to handle user registration
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the email is already in use
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already in use' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Generate a JWT token
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Respond with the user data and token
//     res.status(201).json({ message: 'User registered successfully', token });

//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ error: 'Error registering user', details: error.message });
//   }
// });

// module.exports = router;






const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

// Route to handle user registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password // password will be hashed in the pre-save middleware
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token

    const jwtSecret = process.env.JWT_SECRET || '98123abcf9f9f9f9f9f9f9f9f9f9f9f9f9f9';
    const token = jwt.sign({ userId: newUser._id },jwtSecret, { expiresIn: '1h' });

    // Respond with the user data and token
    res.status(201).json({ message: 'User registered successfully', token });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        console.error(`User not found: ${email}`);
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.error(`Password mismatch for user: ${email}`);
        return res.status(400).json({ error: 'Invalid email or password' });
        

      }
  
      const jwtSecret = process.env.JWT_SECRET || '98123abcf9f9f9f9f9f9f9f9f9f9f9f9f9f9';
      const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
  
      return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Error logging in:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });



module.exports = router;
