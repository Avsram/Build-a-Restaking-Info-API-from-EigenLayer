const express = require('express');
const Reward = require('../models/Reward');
const router = express.Router();

router.get('/:address', async (req, res) => {
  const data = await Reward.findOne({ address: req.params.address.toLowerCase() });
  if (!data) return res.status(404).json({ error: 'No rewards found' });
  res.json(data);
});

module.exports = router;
