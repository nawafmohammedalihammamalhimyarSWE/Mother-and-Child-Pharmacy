# Software Requirements Specification (SRS)

## 1) Context

This SRS describes the software requirements for the Mother and Child Pharmacy MVP. The specification is based on the discovery and business analysis outputs and is designed to support future clinic growth without making it part of the MVP.

## 2) Product Vision

The product is an Arabic-first pharmacy operating platform that supports local OTC pharmaceutical sales, inventory control, batch tracking, supplier management, retail sales, returns, paperwork, and auditability while remaining functional in low-connectivity environments.

## 3) User Roles

- Pharmacy Owner
- Pharmacy Manager
- Pharmacist
- Cashier
- Inventory Controller
- Procurement Officer
- Accountant
- Auditor
- Supplier
- Customer / Patient

## 4) Functional Requirements

### FR-01 Catalog Management
The system shall allow creation, update, deactivation, and search of product records.

### FR-02 Product Search
The system shall support search by product name, barcode, internal code, and supplier reference.

### FR-03 Batch Management
The system shall maintain a separate batch record for each stock received and shall store expiry date, quantity, cost, and supplier data.

### FR-04 FEFO Rule
The system shall select the batch with the nearest expiry date for sale unless a user explicitly overrides the selection with approval.

### FR-05 Inventory Availability
The system shall prevent sale of any batch that is expired, unavailable, or not assigned to the current sales context.

### FR-06 Purchase Entry
The system shall allow recording purchase entries with supplier, currency, cost, quantity, expiry, and batch reference.

### FR-07 Supplier Management
The system shall allow creation and maintenance of supplier records and linking of supplier price lists or documents.

### FR-08 Import Review
The system shall allow importing supplier documents in Excel, PDF, or image formats and require a human review before stock impact.

### FR-09 Sale Creation
The system shall allow creation of sales transactions using barcode scan or manual product selection.

### FR-10 Payment Handling
The system shall support sale completion with clear payment status and invoice creation.

### FR-11 Returns
The system shall support return creation linked to an original invoice and stock restoration rules.

### FR-12 Shift Control
The system shall allow shift opening and closure, with cashier and cash drawer tracking.

### FR-13 Cash Reconciliation
The system shall allow reconciliation between expected cash and actual cash at shift close.

### FR-14 Audit Trail
The system shall log all critical changes with user, time, and reason.

### FR-15 Prescription Archive
The system shall allow attachment of paper prescription scans to sales or patient records.

### FR-16 Patient Lite
The system shall support simplified patient registration for future clinical bridging without full EMR scope.

### FR-17 Reporting
The system shall provide reports for sales, returns, inventory, stock aging, expiry risk, and cash.

### FR-18 Alerts
The system shall show alerts for below-minimum stock and near-expiry stock.

## 5) Non-Functional Requirements

### NFR-01 Offline-first Operation
The system shall remain usable in low-connectivity or offline conditions.

### NFR-02 Arabic Support
The interface shall support Arabic language and RTL layout.

### NFR-03 Performance
Key operations such as product lookup and invoice creation shall complete quickly in normal pharmacy conditions.

### NFR-04 Security
Access shall be controlled through roles and permissions.

### NFR-05 Auditability
Every critical action must preserve a traceable record.

### NFR-06 Reliability
The system shall handle repeated transactions without loss of inventory correctness.

### NFR-07 Data Integrity
The system shall not silently delete or overwrite sensitive transaction records.

## 6) Business Rules Mapping

| Rule | Requirement |
|---|---|
| No expired batch sale | FR-04, FR-05 |
| Human review before import | FR-08 |
| Batch-based stock control | FR-03, FR-04 |
| Return linked to original sale | FR-11 |
| Shift and cash tracking | FR-12, FR-13 |
| Full audit trail | FR-14, NFR-05 |
| Arabic RTL support | NFR-02 |
| Offline-first support | NFR-01 |

## 7) Acceptance Criteria

The project is accepted when:
- sales can be processed with or without barcode
- batch expiry controls prevent invalid sales
- purchase workflows capture cost and currency correctly
- returns are traceable and linked to original sales
- reports are available for inventory, sales, and cash
- system remains stable with local-first operation

## 8) Future Scope Exclusions

The following are excluded from this MVP and remain future roadmap items:
- clinic scheduling
- doctor contracts and payroll
- electronic prescriptions
- full EMR workflows
- patient portal integration

## 9) Transition to Design

Once the BRD and SRS are approved, the team will proceed to UX design, workflow modeling, technical architecture, and implementation planning.
