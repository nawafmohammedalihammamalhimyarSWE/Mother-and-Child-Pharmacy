# Runbook: Local Operations for Pharmacy MVP

## 1. Objective
This runbook explains how to install, run, and validate the pharmacy MVP in the local development environment, after the environment-level blocker is resolved.

## 2. Prerequisites
The local machine must have:
- Node.js 18+
- npm
- Git
- Linux package manager available (`apt-get` on Ubuntu/Debian)

## 3. Environment Fix
If the environment still reports missing sandbox dependencies, run:

```bash
sudo apt-get update
sudo apt-get install -y bubblewrap socat
```

Then retry the project install.

## 4. Install Dependencies
From the project root:

```bash
cd "/home/nawaf/Documents/Mother and Child Pharmacy/Mother-and-Child-Pharmacy-System"
npm install
```

## 5. Start the API
```bash
npm run dev:api
```

Expected behavior:
- Server starts on `http://localhost:4000`
- `/api/health` responds OK

## 6. Start the Web App
In a second terminal:

```bash
npm run dev:web
```

Expected behavior:
- Vite starts on `http://localhost:5173`
- Requests to `/api/*` are proxied to the backend

## 7. Validate the System
Open the following URLs:
- `http://localhost:5173`
- `http://localhost:4000/api/health`
- `http://localhost:4000/api/dashboard`

Expected results:
- Web page loads with the pharmacy dashboard
- API returns JSON with health status and dashboard data

## 8. Development Notes
- Keep all pharmacy MVP logic inside the pharmacy scope.
- Do not add clinic or EMR modules before pharmacy operations are complete.
- Keep transaction audit and FEFO logic central to validation.
- Prefer workflow-first UI over generic dashboard screens.

## 9. Project Commands
```bash
npm run dev:web
npm run dev:api
npm run build
npm run lint
```

## 10. Known Issue
The project code is ready, but the sandboxed environment still blocked dependency installation until `bubblewrap` and `socat` were installed. This is a platform issue and not a code defect.

## 11. Recommended Next Milestone
After successful local startup, proceed to real API-backed data wiring and database-driven flows for inventory, POS, purchases, returns, and shift reconciliation.
