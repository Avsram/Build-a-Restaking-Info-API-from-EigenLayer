require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const restakers = require('./routes/restakers');
const validators = require('./routes/validators');
const rewards = require('./routes/rewards');

const app = express();
app.use(express.json());

app.use('/restakers', restakers);
app.use('/validators', validators);
app.use('/rewards', rewards);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
});