const express = require('express');
const app = express();
const cors = require('cors');
const mongo = require('./db.js');
require('dotenv').config();

// Connect to MongoDB
mongo();

app.use(cors());
const port = 5000;
app.use(express.json());
const createUserRoute = require('./Routes/CreateUser.js');
const LoginUserRoute = require('./Routes/LoginUser.js');
const orderCheckout=require('./Routes/userOrder.js')
const userOrderData = require('./Routes/userOrderData.js')
// Register the routes
app.use('/', createUserRoute);
app.use('/', LoginUserRoute);
app.use('/',orderCheckout);
app.use('/',userOrderData)
app.listen(port, () => {
  console.log(`Food Delivery App listening on port ${port}`);
});
