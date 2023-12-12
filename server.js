const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cron = require('node-cron');
const Crypto = require('./models/Crypto');

const app = express();
const PORT = process.env.PORT || 8080;

    // Connecting to MongoDB
    mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1', { useNewUrlParser: true, useUnifiedTopology: true });

    // Middleware to parse JSON
    app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/update-cryptos', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      const cryptos = response.data;
  
      await Crypto.deleteMany({});
      await Crypto.insertMany(cryptos);
  
      res.status(200).json({ message: 'Cryptos updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

    // Create Scheduling background job
    cron.schedule('0 * * * *', async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      const cryptos = response.data;
  
      await Crypto.deleteMany({});
      await Crypto.insertMany(cryptos);
  
      console.log('Cryptos updated successfully');
    } catch (error) {
      console.error(error);
    }
  });