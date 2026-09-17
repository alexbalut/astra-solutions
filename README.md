# Astra Solutions — marketing site

Static multi-page marketing website for **Astra Solutions**, a B2B software practice based in Montréal. The site presents company services and the flagship product **GymQR Guide** (QR machine instructions + workout tracking for gym operators).

**Stack:** HTML, CSS, and JavaScript only. No React, no build step, no npm.

## Preview locally

From this directory:

```bash
# Option A — open the file directly
open index.html   # macOS
xdg-open index.html   # Linux

# Option B — local server (recommended)
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home — hero, who we serve, services snapshot, GymQR, process, CTA |
| `services.html` | Custom software, integrations, productized tools, support |
| `solutions.html` | GymQR Guide (flagship) + how we work with operators |
| `about.html` | Company story, Montréal roots, values, working-name note |
| `contact.html` | Client-side contact form (validate + success UI) |
| `privacy.html` | Short privacy note for the demo marketing site |

Shared assets: `css/styles.css`, `js/main.js`, `favicon.svg`.

## Deploy

Any static host works (GitHub Pages, Netlify, S3, etc.). Point the host at the repo root; `index.html` is the entry.

## Notes

- Contact form does **not** post to a backend; it validates in-browser and shows a success message. Wire it to Formspree, Netlify Forms, or your API when ready.
- Email `hello@astrasolutions.ca` is a placeholder.
- “Astra Solutions” is a working company name.
