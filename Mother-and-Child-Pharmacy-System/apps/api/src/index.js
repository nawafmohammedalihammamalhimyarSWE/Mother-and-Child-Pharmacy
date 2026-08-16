const express = require('express');
const cors = require('cors');
const {
  dashboardData,
  inventoryItems,
  alertItems,
  productCatalog,
  purchaseOrders,
  posSales,
  returnItems,
  auditEntries,
  batchData,
  suppliers,
  imports,
  shiftEntries,
  reports,
  prescriptions,
  productDetails,
  shiftSummary,
} = require('./data');

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

app.get('/api/inventory', (req, res) => {
  res.json(inventoryItems);
});

app.get('/api/alerts', (req, res) => {
  res.json(alertItems);
});

app.get('/api/products', (req, res) => {
  res.json(productCatalog);
});

app.get('/api/purchases', (req, res) => {
  res.json(purchaseOrders);
});

app.get('/api/pos-sales', (req, res) => {
  res.json(posSales);
});

app.get('/api/returns', (req, res) => {
  res.json(returnItems);
});

app.get('/api/audit', (req, res) => {
  res.json(auditEntries);
});

app.get('/api/batches', (req, res) => {
  res.json(batchData);
});

app.get('/api/suppliers', (req, res) => {
  res.json(suppliers);
});

app.get('/api/imports', (req, res) => {
  res.json(imports);
});

app.get('/api/shift-entries', (req, res) => {
  res.json(shiftEntries);
});

app.get('/api/reports', (req, res) => {
  res.json(reports);
});

app.get('/api/prescriptions', (req, res) => {
  res.json(prescriptions);
});

app.get('/api/product-details', (req, res) => {
  res.json(productDetails);
});

app.get('/api/shift-summary', (req, res) => {
  res.json(shiftSummary);
});

app.listen(port, () => {
  console.log(`Pharmacy API listening on http://localhost:${port}`);
});
