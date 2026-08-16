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

const inventoryItems = [
  { sku: 'A1001', batch: 'AMX-2025-01', expiry: '2026-12-31', quantity: 180, status: 'Available' },
  { sku: 'A1001', batch: 'AMX-2025-03', expiry: '2026-07-15', quantity: 45, status: 'Expiring Soon' },
  { sku: 'P2002', batch: 'PAR-2025-08', expiry: '2027-04-30', quantity: 420, status: 'Available' },
  { sku: 'V3003', batch: 'VIT-2025-15', expiry: '2026-11-15', quantity: 160, status: 'Review' },
  { sku: 'C4004', batch: 'COUG-2025-03', expiry: '2027-03-10', quantity: 80, status: 'Available' },
];

const alertItems = [
  { title: 'Expiry alert', detail: '3 batches are nearing expiry within 30 days.' },
  { title: 'Low stock', detail: '7 SKUs are under reorder threshold.' },
  { title: 'Supplier review', detail: '2 purchase orders need approval before receipt.' },
];

const productCatalog = [
  { sku: 'A1001', name: 'Amoxicillin 500mg', category: 'Antibiotic', stock: 180, price: 18.0 },
  { sku: 'P2002', name: 'Paracetamol 500mg', category: 'Analgesic', stock: 420, price: 7.5 },
  { sku: 'V3003', name: 'Vitamin C 1000mg', category: 'Vitamin', stock: 160, price: 8.0 },
  { sku: 'C4004', name: 'Cough Syrup', category: 'Cold & Flu', stock: 80, price: 24.0 },
  { sku: 'R5005', name: 'Ranitidine', category: 'Gastrointestinal', stock: 68, price: 15.5 },
];

const purchaseOrders = [
  { id: 1, supplier: 'Al Noor Pharma Supply', items: 18, status: 'Awaiting Approval', total: 2450 },
  { id: 2, supplier: 'Medline Distribution', items: 12, status: 'Received', total: 1680 },
  { id: 3, supplier: 'Saudi LifeCare', items: 9, status: 'Pending', total: 980 },
];

const posSales = [
  { id: 1, name: 'Paracetamol 500mg', qty: 2, amount: 15 },
  { id: 2, name: 'Amoxicillin 500mg', qty: 1, amount: 18 },
  { id: 3, name: 'Vitamin C 1000mg', qty: 3, amount: 24 },
  { id: 4, name: 'Cough Syrup', qty: 1, amount: 24 },
];

const returnItems = [
  { id: 1, customer: 'Ahmed Faris', product: 'Naproxen', reason: 'Wrong strength', amount: 42 },
  { id: 2, customer: 'Najla Salem', product: 'Paracetamol', reason: 'Expired batch', amount: 18 },
];

const auditEntries = [
  { id: 1, action: 'Adjusted batch AMX-2025-03', user: 'Huda', time: '09:15' },
  { id: 2, action: 'Approved purchase order PO-1042', user: 'Ali', time: '10:40' },
  { id: 3, action: 'Processed refund for customer #887', user: 'Mariam', time: '12:05' },
];

const batchData = [
  { product: 'Amoxicillin 500mg', batch: 'AMX-2025-01', expiry: '2026-12-31', quantity: 180, priority: 'FEFO' },
  { product: 'Vitamin D3', batch: 'VIT-2025-06', expiry: '2026-08-30', quantity: 40, priority: 'Urgent' },
  { product: 'Cough Syrup', batch: 'COU-2025-19', expiry: '2027-03-10', quantity: 80, priority: 'FEFO' },
];

const suppliers = [
  { id: 1, name: 'Al Noor Pharma', contact: 'Ahmed', country: 'KSA', status: 'Active' },
  { id: 2, name: 'Medline Distribution', contact: 'Rania', country: 'UAE', status: 'Review' },
  { id: 3, name: 'Saudi LifeCare', contact: 'Khalid', country: 'KSA', status: 'Active' },
];

const imports = [
  { id: 1, supplier: 'Al Noor Pharma', ref: 'IMP-2041', status: 'Pending Review', date: '2026-08-16' },
  { id: 2, supplier: 'Medline Distribution', ref: 'IMP-2047', status: 'Approved', date: '2026-08-15' },
];

const shiftEntries = [
  { id: 1, title: 'Opening cash', value: 'SAR 1200', status: 'Balanced' },
  { id: 2, title: 'Net sales', value: 'SAR 6425', status: 'Posted' },
  { id: 3, title: 'Refunds', value: 'SAR 160', status: 'Reviewed' },
];

const reports = [
  { id: 1, title: 'Daily sales', range: 'Today', value: 'SAR 6425', status: 'Final' },
  { id: 2, title: 'Stock movement', range: 'This week', value: '+184 units', status: 'Updated' },
  { id: 3, title: 'Expiry risk', range: '30 days', value: '3 batches', status: 'Monitor' },
];

const prescriptions = [
  { id: 1, patient: 'Lina Al-Mansoor', medication: 'Amoxicillin 500mg', qty: 10, status: 'Ready for dispense' },
  { id: 2, patient: 'Yousef Nasser', medication: 'Vitamin D3 2000IU', qty: 30, status: 'Awaiting review' },
  { id: 3, patient: 'Sara Rahman', medication: 'Cough syrup pediatric', qty: 2, status: 'Approved' },
];

const productDetails = [
  { id: 1, name: 'Panadol Extra', batch: 'PAN-2041', expiry: '2027-04-12', location: 'A1-04', qty: 62 },
  { id: 2, name: 'Zinc Plus', batch: 'ZIN-8702', expiry: '2026-12-10', location: 'B2-11', qty: 18 },
  { id: 3, name: 'Cough Syrup', batch: 'COU-2109', expiry: '2026-09-20', location: 'C4-03', qty: 9 },
];

const shiftSummary = {
  openingDate: '2026-08-17 08:00',
  openingCash: 1200,
  netSales: 6425,
  drawer: 7425,
};

module.exports = {
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
};
