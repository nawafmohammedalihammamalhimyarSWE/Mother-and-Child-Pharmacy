# Technical Architecture

## 1) Architectural Goal

The project needs a local-first, auditable, and resilient pharmacy platform that can operate even under poor connectivity and unstable power. The design must support the core pharmacy workflow while keeping future clinic modules separate and optional.

---

## 2) Architectural Principles

1. Local first, cloud optional
2. Audit by default
3. Batch-level inventory control
4. Human approval before stock-impacting imports
5. Safe rollback instead of destructive delete
6. Future-ready but not over-scoped

---

## 3) High-Level Layers

### Presentation Layer
- POS screens
- Inventory screens
- Supplier and purchase screens
- Reporting and audit dashboards
- Arabic RTL UI support

### Application Layer
- Product service
- Inventory service
- Purchase service
- Sales service
- Return service
- Shift service
- Reporting service
- Audit service

### Domain Layer
- Product
- Batch
- Supplier
- Purchase
- Invoice
- Return
- Cash Drawer
- Shift
- Patient Lite
- Prescription Archive

### Data Layer
- Local relational database
- File storage for documents and images
- Audit log data
- Backup and restore routines

---

## 4) Recommended Runtime Model

### Option: Local-first application with optional sync later

- Primary data stored locally at each branch
- All day-to-day sales and inventory operations happen locally
- A central server may be added later for multi-branch reporting and backup
- Synchronization should follow strict validation and audit replay rules

---

## 5) Recommended Technical Stack

### Frontend
- React + TypeScript
- RTL layout support
- Responsive and desktop-friendly UI

### Backend
- Node.js or .NET service layer depending on team preference
- Internal API services for business operations

### Database
- SQLite for local branch deployment
- PostgreSQL for future central or multi-branch needs

### File Handling
- Document and image storage for supplier import and prescription archive
- Local OCR processing option

### Optional Add-ons
- Barcode integration library
- PDF/Excel import processing
- Reporting engine
- Backup scheduler

---

## 6) Functional Modules

### Catalog Module
Responsible for product creation, classification, search, pricing, and supplier references.

### Purchase Module
Supports supplier management, purchase entry, invoice approval, and cost tracking.

### Inventory Module
Tracks stock by batch and expiry. Controls FEFO, minimum threshold, and alerts.

### POS Module
Handles sales, payment, invoice generation, and receipt creation.

### Return Module
Creates linked return transactions while preserving the original sale record.

### Cash Module
Tracks shift opening, drawer balance, and daily reconciliation.

### Audit Module
Stores all critical events tied to users, timestamps, and references.

### Future Medical Bridge
- Patient Lite record
- Paper prescription archive
- Later eRx and scheduler modules

---

## 7) Security Requirements

- Role-based access control (RBAC)
- User activity logging
- Data authentication for critical operations
- Local encryption for sensitive records if required
- Protection against unauthorized stock alteration
- Controlled permissions for supplier import and product price updates

---

## 8) Backup and Recovery

- Daily local backup
- Versioned transaction log
- Restore procedure by date and transaction set
- Recovery Point Objective (RPO) and Recovery Time Objective (RTO) to be set by owner

---

## 9) Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Local outage | Local-first data storage |
| Weak internet | offline-first operation |
| Import errors | human review prior to stock update |
| Expired stock sale | FEFO + validation rules |
| Data loss | backups and audit logs |
| Price fluctuation | currency-aware transaction records |

---

## 10) Architectural Decision Summary

The system should be developed as a local-first, secure, auditable pharmacy platform with modular services and room for future expansion. The clinic must not be included in the first architecture scope beyond a simple patient and paper-prescription bridge.

---

## 11) Next Step

The next work item is to convert the functional requirements into design screens, user journeys, and a detailed implementation plan.
