const express = require('express');
const Restaker = require('../models/Restaker');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await Restaker.find();
  res.json(data);
});

module.exports = router;
