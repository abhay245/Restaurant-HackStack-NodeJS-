const express = require('express');
const router = express.Router();
const User = require('../models/User');
// Sign-in route
router.post('/signIn', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Compare the password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.status(200).json({user});
    } catch (error) {
      res.status(500).json({ message: 'Sign-in failed', error: error.message });
    }
  });
  module.exports = router;