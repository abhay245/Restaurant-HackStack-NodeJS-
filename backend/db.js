const mongoose = require('mongoose');
require('dotenv').config()
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connection successful!');
    // mongoose.connection.close();
  } catch (error) {
    console.error('Database connection error:', error.message);
  }
}

module.exports = connectToDatabase;

