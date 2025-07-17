const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Webhook route
app.post('/webhook', (req, res) => {
  console.log('✅ Webhook received!');
  console.log('📦 Data:', req.body);
  res.status(200).send('Webhook received!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
