# Cindara — marketing site

Static multi-page marketing website for **Cindara**, a B2B software practice based in Montréal. Domain: [cindara.dev](https://cindara.dev). Practical software for operators — custom tools, integrations, productized tools, and implementation.

**Stack:** HTML, CSS, and JavaScript only. No React, no build step, no npm.

**Look:** Dark cinematic UI (near-black, white type, ice-blue accent) with full-viewport hero motion and scroll reveals.

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
| `index.html` | Home — cinematic hero, what we do, tech image band, process, CTA |
| `services.html` | Custom software, integrations, productized tools, implementation |
| `about.html` | Montréal B2B shop, values |
| `contact.html` | Client-side contact form (validate + success UI) |
| `privacy.html` | Short privacy note (footer only) |

Shared assets: `css/styles.css`, `js/main.js`, `favicon.svg`, `images/`.

## Deploy

Any static host works (GitHub Pages, Netlify, S3, etc.). Point the host at the repo root; `index.html` is the entry.

## Notes

- Contact form does **not** post to a backend; it validates in-browser and shows a success message. Wire it to Formspree, Netlify Forms, or your API when ready.
- Email `hello@cindara.dev` is the public contact address.
- Photo credits: see `CREDITS.md`.
