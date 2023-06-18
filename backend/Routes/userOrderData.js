const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
router.get('/userOrder', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});


module.exports=router;