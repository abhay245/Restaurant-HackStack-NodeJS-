
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }
  
      // Create a new user
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Registration failed', error: error.message });
    }
  });
  module.exports = router;