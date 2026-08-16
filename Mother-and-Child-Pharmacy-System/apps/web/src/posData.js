export const posProducts = [
  { id: 1, name: 'Amoxicillin 500mg', generic: 'Amoxicillin', available: 180, batch: 'AMX-2025-01', expiry: '2026-12-31', price: 18 },
  { id: 2, name: 'Paracetamol 500mg', generic: 'Acetaminophen', available: 420, batch: 'PAR-2025-08', expiry: '2027-04-30', price: 7.5 },
  { id: 3, name: 'Vitamin C 1000mg', generic: 'Ascorbic Acid', available: 160, batch: 'VIT-2025-15', expiry: '2026-11-15', price: 8 },
  { id: 4, name: 'Cough Syrup', generic: 'Dextromethorphan', available: 80, batch: 'COUG-2025-03', expiry: '2027-03-10', price: 24 },
];

export const posCart = {
  items: [
    { id: 1, name: 'Amoxicillin 500mg', qty: 2, price: 18, total: 36 },
    { id: 2, name: 'Paracetamol 500mg', qty: 1, price: 7.5, total: 7.5 },
  ],
  subtotal: 43.5,
  discount: 0,
  tax: 0,
  total: 43.5,
};

export const cashier = {
  shift: 'Morning shift',
  branch: 'Main branch',
};
