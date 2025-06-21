const express = require('express');
const Validator = require('../models/Validator');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Validator.find();
  res.json(data);
});

module.exports = router;
