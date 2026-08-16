export const dashboardData = {
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
    { sku: 'A1001', name: 'Amoxicillin 500mg', stock: 180, expiry: '2026-12-31' },
    { sku: 'P2002', name: 'Paracetamol 500mg', stock: 420, expiry: '2027-04-30' },
    { sku: 'V3003', name: 'Vitamin C 1000mg', stock: 160, expiry: '2026-11-15' },
  ],
};
