export const suppliers = [
  { id: 1, name: 'Al Noor Pharma Supply', contact: 'Ahmed Alharbi', country: 'Saudi Arabia', status: 'Active' },
  { id: 2, name: 'Medline Distribution', contact: 'Sara Hassan', country: 'Saudi Arabia', status: 'Review' },
  { id: 3, name: 'Saudi LifeCare', contact: 'Omar Ameen', country: 'Saudi Arabia', status: 'Active' },
];

export const imports = [
  { id: 1, file: 'supplier_invoice_01.xlsx', source: 'Excel upload', rows: 124, status: 'Pending approval' },
  { id: 2, file: 'supplier_invoice_02.pdf', source: 'PDF OCR', rows: 86, status: 'Reviewed' },
  { id: 3, file: 'supplier_invoice_03.csv', source: 'Manual import', rows: 53, status: 'Rejected' },
];
