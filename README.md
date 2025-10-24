# Lisha Tech — Simple Static Website

A minimal computer sales business focused on custom gaming desktops and new laptops. The site is intentionally simple, clear, and responsive, and includes small client-side enhancements so it behaves well when opened locally (smooth scrolling, button ripple, offline banner/toast).

Tagline: "no glitches in our matrix"

---

## What this repository contains

Choose either the three-file layout or the single-file layout depending on how you saved the project.

- Option A (three separate files)
  - `index.html` — main markup
  - `styles.css` — styling
  - `scripts.js` — small client-side scripts (ripple effect, smooth scroll, offline handling)
  - 'READMe.txt'

- Option B (single-file)
  - `index.html` — a self-contained file with CSS and JS inlined (useful to host as one file or for easy upload)

Included contact and business details (used appropriately in the site):
- Tel: +263 71 727 8399
- Sales Rep: Mari Elisha
- Address: 52G Robert Mugabe Way
- Instagram: lishatechzw
- Facebook: Lisha Tech

---

## Features

- Clean, responsive layout for a single-page site
- Smooth scrolling for in-page navigation
- Visual ripple effect on main buttons
- Offline banner and toast to avoid browser "no internet" page when offline
- Dynamic footer year
- Accessible focus management for in-page navigation

---

## Run locally

Quick ways to preview the site locally:

1. Open the file directly:
   - Double-click `index.html` or open it from your browser: File → Open File → select `index.html`.

2. Run a simple local server (recommended for more accurate behavior):
   - Python 3:
     ```bash
     python -m http.server 8000
     ```
     Then open: `http://localhost:8000`

This is sufficient for testing smooth scrolling, ripple effects, and the offline banner behavior.

---

## Publish to GitHub (and enable GitHub Pages)

Option 1 — Upload via GitHub website (no CLI):
1. Create a new repository on GitHub (for example, `lisha-tech`) under your account `marielisha`.
2. Upload the site files (drag-and-drop `index.html`, `styles.css`, `scripts.js`, and `README.md`) using "Add file → Upload files".
3. Commit the upload.
4. Enable GitHub Pages:
   - Go to the repository Settings → Pages.
   - Under "Build and deployment" select "Deploy from a branch".
   - Choose branch: `main` (or `gh-pages` if you prefer) and folder: `/ (root)`.
   - Save. The published site URL will be something like:
     `https://marielisha.github.io/lisha-tech/` (replace with your username and repo name).

Option 2 — Using Git locally (recommended if comfortable with Git)
1. Open a terminal and change to your project folder:
   ```bash
   cd /path/to/your/site-folder
   ```
2. Initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Lisha Tech site"
   git branch -M main
   git remote add origin https://github.com/marielisha/lisha-tech.git
   git push -u origin main
   ```
   - If GitHub asks for authentication, use `gh auth login`, a Personal Access Token (PAT), or set up SSH keys and use the SSH URL (git@github.com:marielisha/lisha-tech.git).
3. Enable GitHub Pages as described above.

Notes:
- If a remote repo already has a `README` or some content, you may need to `git pull --rebase origin main` first to avoid non-fast-forward errors.
- GitHub Pages may take a minute to publish after enabling.

---

## Customizing the site

- Edit contact details directly in `index.html`.
- Change samples and product descriptions in the "Products" section.
- Replace placeholder text or add images by placing them in the repo and referencing them from `index.html`. If you add images, prefer relative paths (e.g., `images/lt-gamer-15.jpg`).
- To make the site more robust offline (so external assets and pages open while offline), add a service worker and explicit cache rules. I can add a simple service worker file if you'd like to cache the site for full offline use.

---

## Optional improvements I can help with

- Add a contact form (mailto or serverless function).
- Add a service worker for offline caching (PWA support).
- Split the site into multiple pages (products, build configurator).
- Prepare a ready-to-push commit or create the repository and push the files for you.

---

## License & Copyright

© 2025 Lisha Tech. All rights reserved.

This repository is provided as-is for your website. If you want an open-source license for reuse or contributions, you can add a license file (for example, `LICENSE` with MIT) — tell me which license you prefer and I will generate it.

---

## Contact

Sales Rep: Mari Elisha  
Tel: +263 71 727 8399  
Instagram: [@lishatechzw](https://instagram.com/lishatechzw)  
Facebook: [Lisha Tech](https://facebook.com/LishaTech)

---
