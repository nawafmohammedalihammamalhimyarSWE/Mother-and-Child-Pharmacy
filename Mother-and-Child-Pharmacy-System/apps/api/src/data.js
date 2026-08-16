const dashboardData = {
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
  products: [
    {
      id: 1,
      sku: 'A1001',
      name: 'Amoxicillin 500mg',
      category: 'Antibiotic',
      stock: 180,
      expiry: '2026-12-31',
      price: 18.0,
    },
    {
      id: 2,
      sku: 'P2002',
      name: 'Paracetamol 500mg',
      category: 'Analgesic',
      stock: 420,
      expiry: '2027-04-30',
      price: 7.5,
    },
    {
      id: 3,
      sku: 'V3003',
      name: 'Vitamin C 1000mg',
      category: 'Vitamin',
      stock: 160,
      expiry: '2026-11-15',
      price: 8.0,
    },
    {
      id: 4,
      sku: 'C4004',
      name: 'Cough Syrup',
      category: 'Cold & Flu',
      stock: 80,
      expiry: '2027-03-10',
      price: 24.0,
    },
  ],
};

module.exports = { dashboardData };
