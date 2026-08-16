const express = require('express');
const cors = require('cors');

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
  res.json({
    summary: {
      totalProducts: 1284,
      lowStock: 18,
      todaysSales: 12450,
      activeBatches: 96,
    },
    priorities: [
      'Review expiry alerts',
      'Approve purchase orders',
      'Verify returns and damaged items',
      'Close shift cash reconciliation',
    ],
  });
});

app.listen(port, () => {
  console.log(`Pharmacy API listening on http://localhost:${port}`);
});
