# Business Requirements Document (BRD)

## 1) Overview

This Business Requirements Document defines the business needs for the Mother and Child Pharmacy operating platform. It is aligned to the discovery phase and limited to the pharmacy MVP. The clinic and electronic prescription modules remain future scope and are intentionally separated from the core deliverable.

## 2) Business Goal

The pharmacy must operate efficiently, safely, and with strong control over inventory, sales, purchase, returns, cash, auditability, and medication safety. The system must support Arabic-first operations with a reliable offline-first environment and minimal dependency on internet connectivity.

## 3) Business Scope

### In Scope
- Product catalog management
- Batch and expiry tracking
- Purchase and supplier workflow
- Inventory movement and stock ledger
- Barcode and manual lookup POS
- Shift and cash management
- Sales and returns
- Prescription paper archive
- Human review of imported supplier files
- Reporting and audit trail

### Out of Scope for MVP
- Full clinic EMR
- Doctor scheduling and contracts
- Electronic prescription workflow
- Advanced patientmanagement and portal
- Complex insurance integration

## 4) Business Drivers

- Reduce loss due to expired medicine
- Prevent stock mismatch across suppliers and batches
- Speed up sales without sacrificing compliance
- Support Arabic language and local business methods
- Maintain operations even under weak internet or electricity
- Provide clean financial tracking and secure audit trail

## 5) Stakeholders

- Pharmacy owner
- Pharmacy manager
- Pharmacist
- Cashier
- Inventory controller
- Procurement officer
- Accountant
- Auditor
- Supplier
- Customer/patient

## 6) Core Business Processes

### 6.1 Product Management
The pharmacy must maintain a master product list with product name, active ingredients, categories, supplier mapping, unit of sale, and packaging details.

### 6.2 Purchase Workflow
The procurement process must include supplier creation, purchase order or direct invoice entry, item verification, expiry records, cost tracking, currency handling, and status update.

### 6.3 Inventory Management
Inventory must be tracked by batch, expiry, and available quantity. FEFO logic must be applied for sales decisions. Products nearing expiry or below minimum stock should trigger alerts.

### 6.4 POS Sales
The system must handle sales via barcode or manual search. The sale process must validate stock availability, batch status, expiry, and currency context before finalizing the invoice.

### 6.5 Returns
Returns must be tracked as independent transactions linked to the original sale, not silent modifications to the original invoice.

### 6.6 Cash and Shift Control
Each sale and return must be linked to a shift and drawer. Cashier and transaction records must support reconciliation and closing.

### 6.7 Audit
Every critical action must be preserved with user, timestamp, and reference data. Silent deletion is not permitted.

## 7) Business Rules

1. A product cannot be sold if its selected batch is expired.
2. FEFO is the default expiry logic for stock selection.
3. Imported supplier documents require human review before stock impact.
4. Stock movement must always preserve a ledger trail.
5. Each sale/return/stock adjustment must reference an accountable user and timestamp.
6. Barcode scanning is optional; search and manual entry are accepted alternatives.
7. Sale and payment are separate records to support auditability and correction.
8. Future clinic features must not block the pharmacy MVP.

## 8) Business KPIs

- Average POS transaction time under 30 seconds after training
- Stock discrepancy rate below target threshold
- Expired batch sales zero
- Return reconciliation accuracy high
- Daily shift closure completion rate near 100%
- Supplier import review completion rate before stock update

## 9) Business Risks

- Incorrect import data from supplier documents
- Weak network or electricity causing transaction interruption
- Currency fluctuation affecting pricing and margin
- Stock mismatches due to batch confusion
- Expired stock sold unintentionally

## 10) Business Acceptance Criteria

The solution will be accepted when:
- the pharmacy can sell products quickly and safely
- stock is tracked by batch and expiry
- purchasing and supplier management are supported
- returns and cash are reconciled
- audit records exist for changes and corrections
- the system works offline-first and supports future clinic expansion

## 11) Next Step

This BRD feeds the System Requirements Specification and will be used to define functional and non-functional requirements.
