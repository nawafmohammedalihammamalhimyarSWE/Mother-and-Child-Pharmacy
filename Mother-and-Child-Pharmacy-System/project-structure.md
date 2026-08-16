# Project Structure

## Overview
This repository is organized to support the discovery, business analysis, design, and future implementation of the Mother and Child Pharmacy system.

## Top-Level Structure

- `docs/` — project documentation and design artifacts
  - `phase-0/` — product discovery and vision
  - `phase-1/` — ops analysis and owner decisions
  - `phase-2/` — BRD and SRS
  - `phase-3/` — roadmap and planning
  - `phase-4/` — detailed design and implementation breakdown
  - `registers/` — assumptions, decisions, risks, and dependencies
  - `scenarios/` — business scenarios
  - `ux/` — UX research and wireframes
  - `architecture/` — architecture documentation
- `source-material/` — original source requirements and assets
- `README.md` — project overview and status

## Recommended Implementation Structure

Once development begins, the repository can be expanded into:

- `apps/`
  - `web/` — frontend application
  - `desktop/` — desktop shell if needed
- `packages/`
  - `shared/` — shared models, validators, and utilities
  - `ui/` — reusable frontend components
- `services/`
  - `api/` — backend service
  - `sync/` — synchronization service if needed
- `database/`
  - `migrations/`
  - `seed/`
  - `schema/`
- `docs/`
  - `api/`
  - `security/`
  - `testing/`
- `tests/`
  - `unit/`
  - `integration/`
  - `e2e/`

## MVP Scope Mapping

- Products and catalog
- Suppliers and purchases
- Batches and expiry
- Inventory ledger
- POS sales and invoices
- Shift and cash operations
- Returns and reconciliation
- Reports and audit logs
- Patient lite and paper Rx archive

## Future Scope (Deferred)

- Clinic scheduling
- Doctor contracts and visits
- Electronic prescriptions
- Full EMR
- Multi-branch central sync

## Working Rule

The implementation should remain local-first and not regress into full clinic scope until the pharmacy MVP is stable and approved.
