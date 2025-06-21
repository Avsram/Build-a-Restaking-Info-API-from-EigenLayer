const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  user: String,
  amount: Number,
  operator: String
});

module.exports = mongoose.model('Restaker', RestakerSchema);
