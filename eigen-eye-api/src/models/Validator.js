const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
  operator: String,
  totalDelegated: Number,
  status: String,
  slashHistory: [{
    date: Date,
    amount: Number,
    reason: String
  }]
});

module.exports = mongoose.model('Validator', ValidatorSchema);
