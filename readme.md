# Stitch Add Transaction

## Overview
Simple frontend prototype for a gold portfolio dashboard with:
- Page-based navigation across `index.html`, `i_lem_ekle_t_rk_e/code.html`, `price_alerts/code.html`, `portfolio_summary/code.html`, and `gold_dashboard/code.html`
- Client-side form validation and local persistence for transaction entry
- Persistent price alert toggles using `localStorage`
- Consistent bottom navigation across pages

## Run locally
Open `index.html` in your browser or serve the folder with a local static server.

## Test automation
Install dev dependencies and run Playwright tests:

```bash
npm install
npm test
```

### One-step run (PowerShell)
Run the included script to install dependencies, install Playwright browsers and run tests. Output is saved to `runlog.txt`.

```powershell
.\run-tests.ps1
```

### One-step run (Unix)
```bash
./run-tests.sh
```

## Notes
- The workspace includes a Playwright end-to-end test suite under `tests/navigation.spec.ts`.
- CI workflow is configured in `.github/workflows/playwright.yml`.
