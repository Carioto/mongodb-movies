const mongoose = require('mongoose');
require ('dotenv').config();
mongoose.connect(process.env.MONGODB_ACCESS)

module.exports = mongoose.connection;