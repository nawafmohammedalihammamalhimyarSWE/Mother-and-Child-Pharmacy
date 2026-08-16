INSERT INTO products (sku, trade_name, generic_name, category, strength, form, pack_size, unit_cost, sale_price, requires_prescription)
VALUES
  ('A1001', 'Amoxicillin 500mg', 'Amoxicillin', 'Antibiotic', '500mg', 'Capsule', 20, 12.50, 18.00, 1),
  ('P2002', 'Paracetamol 500mg', 'Acetaminophen', 'Analgesic', '500mg', 'Tablet', 24, 4.80, 7.50, 0),
  ('V3003', 'Vitamin C 1000mg', 'Ascorbic Acid', 'Vitamin', '1000mg', 'Tablet', 30, 5.00, 8.00, 0),
  ('C4004', 'Cough Syrup', 'Dextromethorphan', 'Cold & Flu', '120ml', 'Syrup', 1, 16.00, 24.00, 0);

INSERT INTO suppliers (name, phone, email, contact_person)
VALUES
  ('Al Noor Pharma Supply', '966500111111', 'sales@alnoor.sa', 'Ahmed Alharbi'),
  ('Medline Distribution', '966500222222', 'support@medline.sa', 'Sara Hassan');

INSERT INTO batches (product_id, batch_number, expiry_date, received_quantity, available_quantity, unit_cost)
VALUES
  (1, 'AMX-2025-01', '2026-12-31', 500, 180, 12.50),
  (2, 'PAR-2025-08', '2027-04-30', 1000, 420, 4.80),
  (3, 'VIT-2025-15', '2026-11-15', 600, 160, 5.00),
  (4, 'COUG-2025-03', '2027-03-10', 250, 80, 16.00);
