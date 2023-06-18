const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  foodItems: {
    type: Array,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
