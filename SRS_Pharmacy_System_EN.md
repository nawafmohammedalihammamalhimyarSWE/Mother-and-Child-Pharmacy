# Software Requirements Specification (SRS)
## Clinic Pharmacy Management System - Yemen Edition

---

**Document ID:** SRS-PHARM-YE-001  
**Version:** 1.0  
**Date:** August 17, 2026  
**Status:** Final Review  
**Author:** Software Engineering Team  

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall System Description](#2-overall-system-description)
3. [Functional Requirements](#3-functional-requirements)
4. [Non-Functional Requirements](#4-non-functional-requirements)
5. [Database Schema](#5-database-schema)
6. [User Interfaces](#6-user-interfaces)
7. [Security and Compliance](#7-security-and-compliance)
8. [Implementation Plan](#8-implementation-plan)
9. [Appendices](#9-appendices)

---

## 1. Introduction

### 1.1 Purpose
This document defines the complete requirements for a Clinic Pharmacy Management System designed specifically for the Yemeni context. The system automates all operational processes in a clinic pharmacy while accounting for local conditions.

### 1.2 Scope
The system covers:
- Product import from multiple file formats (Excel, PDF, Images)
- Inventory management with FEFO methodology
- Point of Sale (POS) with volatile currency support
- Invoice management (Cash/Credit/Staff/Emergency)
- Returns management (from customers / to suppliers)
- Purchase and supplier management
- Shift and cash drawer management
- Financial reports and analytics
- Clinic EMR integration (Phase 3)

### 1.3 Definitions and Acronyms

| Term | Definition |
|------|------------|
| **FEFO** | First Expired First Out |
| **POS** | Point of Sale |
| **OCR** | Optical Character Recognition |
| **SKU** | Stock Keeping Unit |
| **Z-Report** | Daily shift close report |
| **A/R** | Accounts Receivable |
| **A/P** | Accounts Payable |
| **EMR** | Electronic Medical Record |
| **MVP** | Minimum Viable Product |
| **Rx** | Prescription |

### 1.4 Intended Audience
- Clinic managers
- Pharmacists
- Cashiers
- Software development team
- Technical consultants

---

## 2. Overall System Description

### 2.1 Clinic-First Context
80% of sales come from clinic patients rather than the general public. This imposes special requirements:
- Instant link to patient file when arriving from the doctor
- "Quick dispense for clinic" mode without detailed data entry
- Reports by doctor/specialty
- Staff accounts with special pricing

### 2.2 Yemen Context
- **No Insurance:** Replace insurance module with credit/debt system
- **Currency Volatility:** Purchase in USD, sell in YER. Store exchange rate per invoice
- **Power/Internet Outages:** System works 100% Offline
- **Paper Prescriptions:** 95% of prescriptions are paper-based. Scan and link to invoice
- **Local Barcodes:** Generate internal barcodes for medicines without international barcodes

### 2.3 Economic Context
- **Persistent Inflation:** Adjust selling price without changing purchase price
- **Imported Medicines:** Track batch + arrival date + supplier + exchange rate at purchase

### 2.4 Operational Context
- **Pharmacist = Manager:** Very easy interface (One-click operations)
- **Shifts:** Shift system + cash handover
- **Emergencies:** Dispense medicine in 30 seconds

### 2.5 Clinic System Integration Strategy (NEW)

#### Phase 1: Simple Patient Registration (Months 1-2)
The clinic system starts extremely simple:
- Patient registration only (name, age, phone, allergies, chronic diseases)
- Doctor writes prescriptions on paper (as usual, with pen)
- No electronic prescriptions yet

**Why this is better:**
- Doctors hate complex systems on day one
- Forcing electronic prescriptions causes rejection
- Patient registration alone provides 80% of the value

#### Phase 2: Paper Prescription Digitization (Months 3-6)
In the pharmacy (not the clinic), the cashier/pharmacist:
- Scans the paper prescription using the camera
- Uploads it automatically
- Links it to the invoice
- Prints a sticker: "Rx #1024" to attach to the medicine bag

**Benefits:**
- Prescription is digitally archived and linked to the pharmacy invoice
- If patient returns saying "medicine hurt me" - retrieve the prescription from the system
- Regulatory compliance: complete image archive

#### Phase 3: Electronic Prescriptions (Months 6-12)
After 3-6 months, when:
- Doctors are used to opening patient files in the system
- Doctors ask: "Would be easier if I write the medicine here instead of paper"

Then add:
- Electronic prescription writing interface
- Send prescription directly to pharmacy screen
- Pharmacy receives instant notification

**Golden Rule:** Don't change the doctor's habit on day one. Let them write with pen. Just register the patient in the system. This alone changes your workflow 180 degrees.

---

## 3. Functional Requirements

### 3.1 Product Import Module (FR-001 to FR-010)

#### FR-001: Excel File Upload
- Support .xlsx and .xls formats
- Required fields:
  - Product SKU/Barcode
  - Trade name
  - Generic name
  - Concentration
  - Pharmaceutical form
  - Manufacturer
  - Purchase price
  - Selling price
  - Opening quantity
  - Expiry date
  - Batch/Lot number
  - Temperature requirement
- Data validation before saving
- Automatic duplicate detection

#### FR-002: PDF File Upload
- Extract product data from supplier catalogs (text-based PDF)
- Future: Support scanned PDFs

#### FR-003: Image Upload (OCR)
- Local OCR using Tesseract.js (no internet required)
- Supported formats: JPG, PNG, BMP
- Pre-processing: rotation, contrast adjustment

#### FR-004: Import Templates
- Ready-made Excel templates
- Template for new product entry
- Template for price updates
- Template for inventory count

#### FR-005: Preview Before Save
- Display imported data in table for review
- Allow editing before confirmation
- Statistics: item count, total, errors

#### FR-006: Internal Barcode
- Auto-generation format: PH-YYYY-XXXXX
- Support printing barcode labels on thermal paper
- Size: 30x20mm (fits medicine boxes)

#### FR-007: Product Classification
- By pharmaceutical form (Tablet, Syrup, Injection, etc.)
- By temperature (Normal / Refrigerated 2-8C)
- By type (Controlled / Restricted / Normal)

#### FR-008: Batch Tracking (FEFO)
- Each batch has: batch number, expiry date, purchase price, quantity
- FEFO system: suggest nearest expiry batch automatically at sale

#### FR-009: Stock Alerts
- Alert when quantity reaches minimum stock
- Alert for "dead stock" (not sold in X days)
- Alert for expiry within 6 months (for supplier return)
- Alert for expiry within 1 month / 1 week

#### FR-010: Temperature Management
- Mandatory field for refrigerated medicines
- Alert during power outages (if sensor available)
- Temperature log (if sensor available)

---

### 3.2 Purchase Management (FR-011 to FR-020)

#### FR-011: Create Purchase Orders (PO)
- Create purchase orders for suppliers
- Specify quantities and expected prices
- Save as draft before sending

#### FR-012: Import Supplier Price Lists
- Upload Excel/PDF files from suppliers
- Compare prices for same medicine from multiple suppliers
- Auto-update purchase prices

#### FR-013: Currency and Exchange Rate
- "Purchase currency" field (USD/YER)
- Store exchange rate at time of purchase
- Auto-calculate cost in YER

#### FR-014: Payment Terms
- Cash
- Credit 30 days
- Credit 60 days
- Down payment + installments

#### FR-015: Additional Costs
- Shipping
- Customs
- Internal transport
- Distribute additional costs across product costs

#### FR-016: Partial Receipt
- Receive partial quantities
- Create separate "receipt notice" for each receipt
- Auto-update quantities

#### FR-017: Order Status Tracking
- Pending
- Shipped
- Receiving
- Fully received
- Partially received
- Cancelled

#### FR-018: Purchase Reports
- Purchases by supplier
- Purchases by period
- Recently received items
- Amounts due to suppliers

#### FR-019: Inventory Integration
- Auto-update inventory upon receipt
- Auto-create new batch
- Record arrival date

#### FR-020: Supplier Evaluation
- Product quality (1-5)
- Price (1-5)
- Delivery speed (1-5)
- Supplier evaluation report

---

### 3.3 Sales Management (FR-021 to FR-035)

#### FR-021: Point of Sale (POS) Interface
- Fast screen with favorite medicines list
- Smart search bar (by name/barcode/generic name)
- Display current invoice
- Quick payment buttons

#### FR-022: Invoice Types
- **Cash:** Immediate payment
- **Credit:** For trusted customers
- **Staff:** At cost price + small margin
- **Emergency:** Quick dispense without detailed data

#### FR-023: Quick Dispense (Emergency)
- Scan barcode -> Pay -> Print receipt in 10 seconds
- Skip patient data entry
- Use "General Cash Customer"
- Allow completing data later

#### FR-024: Exchange Rate per Invoice
- "Exchange rate" field auto-populates (last recorded rate)
- Editable manually
- Store exchange rate with every invoice

#### FR-025: Paper Prescription Linking
- Upload prescription image
- Extract prescription text (OCR)
- Link prescription to invoice
- Save prescription number and doctor name

#### FR-026: Patient Allergy Check
- Record patient allergies (penicillin, sulfa, etc.)
- RED warning when dispensing conflicting medicine
- Severity levels (Low/Medium/High)

#### FR-027: Drug Interaction Check
- Offline drug interaction database
- Warning when prescription contains conflicting medicines
- Severity levels (Minor/Moderate/Major/Contraindicated)

#### FR-028: Discount Application
- Percentage discount per product
- Fixed discount per invoice
- Auto-discount for staff
- Time-limited promotional discounts

#### FR-029: Loyalty Points System
- Every 10,000 YER -> 500 YER discount
- Track points per customer
- Redeem points

#### FR-030: Treatment Packages
- Create packages (e.g., Diabetes monthly package)
- Specify medicines, quantities, discounted price
- Dispense package as single unit

#### FR-031: Time-Limited Promotions
- "20% discount on antibiotics this week only"
- Define promotion period
- Auto-apply on invoices

#### FR-032: Sales Reports
- Daily/weekly/monthly sales
- Best-selling medicines
- Worst-selling medicines
- Profit margin by batch
- Sales by doctor/specialty

#### FR-033: Clinic EMR Integration
- Simple API to receive prescriptions from doctors
- Display pending prescriptions automatically
- Update prescription status (pending/dispensed)

#### FR-034: Customer Management
- Customer card (name, phone, birth date)
- Customer type (patient/staff/public)
- Credit limit (for credit customers)
- Customer balance

#### FR-035: Doctor Reports
- "How much did Dr. Ahmed prescribe in antibiotics this month?"
- Prescription statistics by doctor
- Most prescribing doctors report

---

### 3.4 Invoice Management (FR-036 to FR-045)

#### FR-036: Invoice Creation
- Auto-create upon sale completion
- Generate unique invoice number: INV-YYYY-XXXXX
- Link to current shift

#### FR-037: Invoice Types
- Cash invoice
- Credit invoice
- Staff invoice
- Emergency invoice

#### FR-038: Invoice Status
- **Open:** Being edited
- **Closed:** Paid
- **Pending:** Awaiting payment
- **Cancelled:** With reason logged

#### FR-039: Invoice Modification
- Allowed only within same shift
- Log modifications in audit trail
- Cannot modify yesterday's invoice

#### FR-040: Invoice Cancellation
- Create "return invoice" + "new invoice"
- Log cancellation reason
- Notify manager for cancelled invoices

#### FR-041: Receipt Printing
- Simple/paper invoice template
- Thermal printing (ESC/POS)
- A4 printing (fallback)
- Print preview

#### FR-042: Electronic Invoice Delivery
- Save as PDF
- Send via WhatsApp (future)

#### FR-043: Payment Methods
- Cash
- Credit/Debit card
- Bank transfer
- Credit
- Installment payment

#### FR-044: Invoice Reports
- Daily invoices report
- Cancelled invoices report
- Credit amounts due
- Tax report (if applicable)
- Net profit report

#### FR-045: Z-Report (Daily Close)
- Total sales
- Cash/Credit/Returns
- Net cash drawer
- Invoice count
- Comparison with previous shift

---

### 3.5 Returns Management (FR-046 to FR-055)

#### FR-046: Return Types
- **From customers:** Medicine return (safety condition)
- **To suppliers:** Expired or damaged medicines
- **Expiry:** Expired medicines
- **Damaged:** Damaged during transport or storage

#### FR-047: Customer Return Workflow
1. Search original invoice
2. Specify returned items and quantities
3. Specify return reason
4. Check product condition (usable/damaged)
5. Auto-create return invoice
6. Refund or convert to credit
7. Return to inventory (if usable)

#### FR-048: Supplier Return Workflow
1. Specify items to return
2. Create return notice for supplier
3. Track status (under review/approved/received)
4. Receive discount notice or new invoice
5. Update inventory and accounts

#### FR-049: Return Conditions
- From customer: within 7 days, packaging intact
- To supplier: within 3 months before expiry

#### FR-050: Return Reports
- Monthly returns report
- Losses from returns
- Returns by supplier
- Return reasons report

---

### 3.6 Shift and Cash Drawer Management (FR-051 to FR-060)

#### FR-051: Open Shift
- User login
- Open cash drawer
- Record opening balance
- Record start time

#### FR-052: Close Shift
- Calculate total sales
- Calculate cash/credit/returns
- Record closing balance
- Compare expected vs actual balance
- Record any discrepancies

#### FR-053: Cash Handover
- Z-Report generation
- Handover cash to manager/next shift
- Electronic signature

#### FR-054: Cash Drawer Management
- Create multiple drawers
- Track current balance
- Activate/deactivate drawers

#### FR-055: Shift Alerts
- Mandatory alert when closing application
- Auto-close after 30 minutes idle
- Log open shifts

---

### 3.7 Debt Management (FR-061 to FR-070)

#### FR-061: Record New Debt
- Upon creating credit invoice
- Specify debt amount and due date
- Specify customer

#### FR-062: Debt Payment
- Partial or full payment
- Record payment method
- Auto-update balance

#### FR-063: Debt Alerts
- Alert 3 days before due date
- Alert on due date
- Alert for overdue payments

#### FR-064: Debt Reports
- Due debts report
- Overdue debts report
- Customer payment history
- Total debts by customer

#### FR-065: Supplier Debts (A/P)
- Record debts to suppliers
- Track payment dates
- Report amounts due to suppliers

---

### 3.8 Reports and Analytics (FR-071 to FR-080)

#### FR-071: Main Dashboard
- Today's total sales (real-time)
- Today's invoice count (vs yesterday)
- Low stock items
- Near-expiry items
- Top 5 best-selling medicines
- Net profit

#### FR-072: Sales Reports
- Daily/weekly/monthly/yearly
- By product
- By category
- By customer
- By doctor

#### FR-073: Inventory Reports
- Inventory movement
- Inventory count
- Dead stock
- Expired medicines
- FEFO report

#### FR-074: Financial Reports
- Profit and loss
- Profit margin by batch
- Cash flow
- Operating expenses

#### FR-075: Export Reports
- Excel
- PDF
- Print

---

## 4. Non-Functional Requirements

### 4.1 Performance (NFR-001 to NFR-010)

#### NFR-001: Response Speed
- Open POS screen in less than 2 seconds
- Search for medicine in less than 500ms
- Print invoice in less than 3 seconds

#### NFR-002: Scalability
- Support up to 10,000 products
- Support up to 100,000 invoices per year
- Support up to 50 users

#### NFR-003: Availability
- Work without internet 100%
- Daily backup
- Recovery mode after power outage

### 4.2 Security (NFR-011 to NFR-020)

#### NFR-011: User Permissions (RBAC)
| Role | Permissions |
|------|-------------|
| **Manager** | All permissions |
| **Senior Pharmacist** | Sales + Inventory + Purchases + Reports |
| **Pharmacist** | Sales + Inventory |
| **Cashier** | Sales only |
| **Inventory** | Inventory + Purchases |

#### NFR-012: Audit Log
- Log every add/edit/delete operation
- Log user, time, and operation
- Cannot delete audit log

#### NFR-013: Data Encryption
- Encrypt passwords (bcrypt)
- Encrypt sensitive customer data
- Encrypt medical prescriptions

#### NFR-014: Secure Login
- Strong passwords (minimum 8 characters)
- Lock account after 5 failed attempts
- Optional 2FA (future)

### 4.3 Usability (NFR-021 to NFR-030)

#### NFR-021: User Interface
- RTL (Right-to-Left) design
- Colors suitable for continuous work
- Clear, large fonts

#### NFR-022: Ease of Use
- One-click operations for common tasks
- Keyboard shortcuts
- Smart search with auto-complete

#### NFR-023: Documentation
- Built-in user guide
- Tooltips
- Clear error messages

### 4.4 Reliability (NFR-031 to NFR-040)

#### NFR-031: Auto-Save
- Auto-save every 5 seconds
- Recovery mode after restart
- No data loss during power outage

#### NFR-032: Backup
- Daily automatic backup
- Manual backup on demand
- Restore from backup

#### NFR-033: Data Validation
- Validate mandatory fields
- Validate dates
- Validate numbers (not zero/negative)

---

## 5. Database Schema

### 5.1 Main Tables (18 Tables)

#### 5.1.1 users
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('manager', 'senior_pharmacist', 'pharmacist', 'cashier', 'inventory') NOT NULL,
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5.1.2 shifts
```sql
CREATE TABLE shifts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    cash_drawer_id INTEGER,
    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMP,
    opening_cash DECIMAL(15,2) DEFAULT 0,
    closing_cash DECIMAL(15,2),
    expected_cash DECIMAL(15,2),
    difference DECIMAL(15,2),
    status ENUM('open', 'closed', 'auto_closed') DEFAULT 'open',
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (cash_drawer_id) REFERENCES cash_drawers(id)
);
```

#### 5.1.3 cash_drawers
```sql
CREATE TABLE cash_drawers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    current_balance DECIMAL(15,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);
```

#### 5.1.4 products
```sql
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    internal_barcode VARCHAR(20) UNIQUE,
    trade_name VARCHAR(100) NOT NULL,
    generic_name VARCHAR(100),
    concentration VARCHAR(50),
    form ENUM('tablet', 'syrup', 'injection', 'cream', 'drops', 'inhaler', 'other'),
    manufacturer VARCHAR(100),
    category VARCHAR(50),
    requires_refrigeration BOOLEAN DEFAULT FALSE,
    min_stock INTEGER DEFAULT 10,
    reorder_point INTEGER DEFAULT 20,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5.1.5 batches
```sql
CREATE TABLE batches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    batch_number VARCHAR(50) NOT NULL,
    expiry_date DATE NOT NULL,
    purchase_price DECIMAL(15,2) NOT NULL,
    quantity_received INTEGER NOT NULL,
    quantity_remaining INTEGER NOT NULL,
    supplier_id INTEGER,
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
```

#### 5.1.6 suppliers
```sql
CREATE TABLE suppliers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    payment_terms VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE
);
```

#### 5.1.7 customers
```sql
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    type ENUM('patient', 'staff', 'public') DEFAULT 'public',
    credit_limit DECIMAL(15,2) DEFAULT 0,
    balance DECIMAL(15,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5.1.8 patient_allergies
```sql
CREATE TABLE patient_allergies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    allergy_type VARCHAR(100) NOT NULL,
    description TEXT,
    severity ENUM('low', 'medium', 'high') DEFAULT 'medium',
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

#### 5.1.9 prescriptions
```sql
CREATE TABLE prescriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    image_url VARCHAR(255),
    ocr_text TEXT,
    doctor_name VARCHAR(100),
    status ENUM('pending', 'dispensed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

#### 5.1.10 invoices
```sql
CREATE TABLE invoices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_number VARCHAR(20) UNIQUE NOT NULL,
    customer_id INTEGER,
    user_id INTEGER NOT NULL,
    shift_id INTEGER,
    total_amount DECIMAL(15,2) NOT NULL,
    discount DECIMAL(15,2) DEFAULT 0,
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    payment_type ENUM('cash', 'credit', 'staff', 'emergency') DEFAULT 'cash',
    status ENUM('open', 'closed', 'pending', 'cancelled') DEFAULT 'open',
    prescription_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (shift_id) REFERENCES shifts(id),
    FOREIGN KEY (prescription_id) REFERENCES prescriptions(id)
);
```

#### 5.1.11 invoice_items
```sql
CREATE TABLE invoice_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    invoice_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    batch_id INTEGER,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    total_price DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (batch_id) REFERENCES batches(id)
);
```

#### 5.1.12 debts
```sql
CREATE TABLE debts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    invoice_id INTEGER,
    amount DECIMAL(15,2) NOT NULL,
    paid_amount DECIMAL(15,2) DEFAULT 0,
    due_date DATE,
    status ENUM('active', 'paid', 'overdue', 'partial') DEFAULT 'active',
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);
```

#### 5.1.13 purchase_orders
```sql
CREATE TABLE purchase_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    supplier_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    total_amount DECIMAL(15,2),
    currency ENUM('USD', 'YER') DEFAULT 'USD',
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    status ENUM('draft', 'sent', 'partial', 'received', 'cancelled') DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### 5.1.14 purchase_items
```sql
CREATE TABLE purchase_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    purchase_order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    batch_number VARCHAR(50),
    expiry_date DATE,
    received_quantity INTEGER DEFAULT 0,
    FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### 5.1.15 returns
```sql
CREATE TABLE returns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type ENUM('customer', 'supplier') NOT NULL,
    invoice_id INTEGER,
    product_id INTEGER NOT NULL,
    batch_id INTEGER,
    quantity INTEGER NOT NULL,
    reason TEXT,
    refund_amount DECIMAL(15,2),
    status ENUM('pending', 'approved', 'completed', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (invoice_id) REFERENCES invoices(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (batch_id) REFERENCES batches(id)
);
```

#### 5.1.16 expenses
```sql
CREATE TABLE expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category ENUM('rent', 'electricity', 'salaries', 'maintenance', 'other') NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    receipt_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 5.1.17 exchange_rates
```sql
CREATE TABLE exchange_rates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE NOT NULL,
    usd_to_yer DECIMAL(10,2) NOT NULL,
    source VARCHAR(50) DEFAULT 'manual'
);
```

#### 5.1.18 treatment_packages
```sql
CREATE TABLE treatment_packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    items_json TEXT NOT NULL,
    price DECIMAL(15,2) NOT NULL,
    duration_days INTEGER,
    is_active BOOLEAN DEFAULT TRUE
);
```

### 5.2 Indexes
```sql
CREATE INDEX idx_products_barcode ON products(internal_barcode);
CREATE INDEX idx_products_trade_name ON products(trade_name);
CREATE INDEX idx_batches_expiry ON batches(expiry_date);
CREATE INDEX idx_batches_product ON batches(product_id);
CREATE INDEX idx_invoices_date ON invoices(created_at);
CREATE INDEX idx_invoices_customer ON invoices(customer_id);
CREATE INDEX idx_invoice_items_invoice ON invoice_items(invoice_id);
CREATE INDEX idx_debts_customer ON debts(customer_id);
CREATE INDEX idx_debts_status ON debts(status);
```

### 5.3 Views
```sql
-- Current stock
CREATE VIEW current_stock AS
SELECT 
    p.id, p.trade_name, p.generic_name, p.internal_barcode,
    COALESCE(SUM(b.quantity_remaining), 0) as total_quantity,
    MIN(b.expiry_date) as nearest_expiry
FROM products p
LEFT JOIN batches b ON p.id = b.product_id
WHERE p.is_active = TRUE
GROUP BY p.id;

-- Today's sales
CREATE VIEW today_sales AS
SELECT 
    COUNT(*) as invoice_count,
    SUM(total_amount) as total_sales,
    SUM(CASE WHEN payment_type = 'cash' THEN total_amount ELSE 0 END) as cash_sales,
    SUM(CASE WHEN payment_type = 'credit' THEN total_amount ELSE 0 END) as credit_sales
FROM invoices
WHERE DATE(created_at) = DATE('now')
AND status = 'closed';

-- Overdue debts
CREATE VIEW overdue_debts AS
SELECT 
    c.name, c.phone,
    d.amount, d.paid_amount, d.due_date,
    (d.amount - d.paid_amount) as remaining
FROM debts d
JOIN customers c ON d.customer_id = c.id
WHERE d.status IN ('active', 'overdue')
AND d.due_date < DATE('now');
```

---

## 6. User Interfaces

### 6.1 Cashier POS Screen
```
+-----------------------------------------------------+
| [Barcode] [Quick Search]     Rate: 1$ = 1500YER     |
+-----------------------------------------------------+
|  Patient: [General Cash ▼]  [Camera Scan Rx]      |
|  Allergy Alert: Penicillin (RED WARNING)           |
+-----------------------------------------------------+
|  #  | Medicine    | Batch    | Qty  | Price       |
|  1   | Amoxicillin | EXP:2026-05| 1   | 3,500 YER  |
|  2   | Panadol     | EXP:2026-02| 2   | 1,000 YER  |
+-----------------------------------------------------+
|  Total: 4,500 YER  |  Discount: 0  |  Net: 4,500   |
+-----------------------------------------------------+
|  [Cash] [Credit] [Staff] [Emergency Quick]          |
+-----------------------------------------------------+
```

### 6.2 Pharmacist Dashboard
```
+-----------------------------------------------------+
|  Alerts:                                            |
|  - 5 medicines expiring within a month             |
|  - 3 medicines with zero stock                      |
|  - Drug interaction: Warfarin + Aspirin (Rx #1234) |
+-----------------------------------------------------+
|  Pending Prescriptions:                             |
|  - Patient: Ahmed Mohamed - Dr: Khalid - 3 items  |
|  - Patient: Fatima Ali - Dr: Sara - 1 item        |
+-----------------------------------------------------+
|  Purchase orders awaiting: 2                       |
+-----------------------------------------------------+
```

### 6.3 Manager Dashboard
- Control panel and reports
- User and permission management
- Review returns and cancelled invoices
- Manage exchange rates
- Comprehensive financial reports

---

## 7. Security and Compliance

### 7.1 Security
- Password encryption using bcrypt
- RBAC permissions
- Complete audit log
- Daily backup
- Account lock after 5 failed attempts

### 7.2 Regulatory Compliance
- Track controlled substances per local regulations
- Preserve prescription records for 5+ years
- Invoices compliant with tax authority
- Patient data protection

---

## 8. Implementation Plan

### 8.1 Phase 1: MVP (Weeks 1-8)
| Week | Task |
|------|------|
| 1 | Setup tech environment (SQLite + Electron) |
| 1-2 | Design database + core tables |
| 2-4 | Product import (manual + Excel) |
| 3-5 | Inventory module (qty + FEFO expiry) |
| 4-6 | Point of Sale POS (cash only) |
| 5-7 | Internal barcode + receipt printing |
| 6-8 | User testing + bug fixes |

### 8.2 Phase 2: Operations (Weeks 8-16)
| Week | Task |
|------|------|
| 8-10 | Purchases + suppliers module |
| 9-11 | Debt & credit system (A/R) |
| 10-12 | Returns (customer + supplier) |
| 11-13 | Shifts + cash drawers + Z-Report |
| 12-14 | Paper prescription OCR (local) |
| 13-15 | Basic reports |
| 14-16 | Full testing + staff training |

### 8.3 Phase 3: Integration (Weeks 16-24)
| Week | Task |
|------|------|
| 16-18 | Clinic EMR integration (API) |
| 17-19 | Patient allergy + drug interactions |
| 18-20 | Treatment packages + promotions |
| 19-21 | Operating expenses + net profit |
| 20-22 | Backup + cloud sync |
| 21-23 | UAT (User Acceptance Testing) |
| 22-24 | Deployment + post-launch support |

---

## 9. Appendices

### Appendix A: Excel Templates
- New product entry template
- Price update template
- Inventory count template
- Customer import template

### Appendix B: Offline Drug Interaction Database
- Local database with 5000+ drug interactions
- Quarterly updates

### Appendix C: User Guide
- Quick Start guide
- Full User Manual
- Troubleshooting guide

### Appendix D: Hardware Requirements
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Processor | Intel i3 | Intel i5 |
| RAM | 4 GB | 8 GB |
| Storage | 128 GB SSD | 256 GB SSD |
| Display | 1366x768 | 1920x1080 |
| Printer | Thermal 80mm | Thermal 80mm |
| Barcode Scanner | USB | USB |

---

**End of Document**

*This document is subject to review and updates. Last updated: August 17, 2026*
