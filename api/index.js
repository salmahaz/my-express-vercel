const express = require('express');
const serverless = require('serverless-http');

const app = express();

// define your routes
app.get('/', (req, res) => {
  res.send('hello from express on vercel 🚀');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

module.exports = app;
module.exports.handler = serverless(app);