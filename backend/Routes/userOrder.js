const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
// My Order route
router.post('/myOrder', async (req, res) => {
  const { userEmail, foodItems, date } = req.body;
  try {
    let order = await Order.findOne({ userEmail });
    
    if (order) {
      order.foodItems.push(...foodItems);
      order.date = date;
      await order.save();
    } else {
      order = new Order({
        userEmail,
        foodItems,
        date,
      });
      await order.save();
    }

    res.status(200).json({ ok: true});
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

module.exports = router;
