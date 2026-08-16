const express = require('express');
const cors = require('cors');
const { dashboardData } = require('./data');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'pharmacy-api',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

app.listen(port, () => {
  console.log(`Pharmacy API listening on http://localhost:${port}`);
});
