export const inventoryItems = [
  { sku: 'A1001', batch: 'AMX-2025-01', expiry: '2026-12-31', quantity: 180, status: 'Available' },
  { sku: 'A1001', batch: 'AMX-2025-03', expiry: '2026-07-15', quantity: 45, status: 'Expiring Soon' },
  { sku: 'P2002', batch: 'PAR-2025-08', expiry: '2027-04-30', quantity: 420, status: 'Available' },
  { sku: 'V3003', batch: 'VIT-2025-15', expiry: '2026-11-15', quantity: 160, status: 'Review' },
  { sku: 'C4004', batch: 'COUG-2025-03', expiry: '2027-03-10', quantity: 80, status: 'Available' },
];

export const alertItems = [
  { title: 'Expiry alert', detail: '3 batches are nearing expiry within 30 days.' },
  { title: 'Low stock', detail: '7 SKUs are under reorder threshold.' },
  { title: 'Supplier review', detail: '2 purchase orders need approval before receipt.' },
];

export const productCatalog = [
  { sku: 'A1001', name: 'Amoxicillin 500mg', category: 'Antibiotic', stock: 180, price: 18.0 },
  { sku: 'P2002', name: 'Paracetamol 500mg', category: 'Analgesic', stock: 420, price: 7.5 },
  { sku: 'V3003', name: 'Vitamin C 1000mg', category: 'Vitamin', stock: 160, price: 8.0 },
  { sku: 'C4004', name: 'Cough Syrup', category: 'Cold & Flu', stock: 80, price: 24.0 },
  { sku: 'R5005', name: 'Ranitidine', category: 'Gastrointestinal', stock: 68, price: 15.5 },
];
