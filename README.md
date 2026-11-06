# tesseract.city

Static site built from Design Components (`*.dc.html`). No build step.

## Pages
- `/` → Home.dc.html
- `/climate-resilience`, `/integrated-development`, `/for-developers`, `/learn-more` (Process.dc.html), `/about`, `/contact`

Old Webflow URLs (`/climate-resillience`, `/intergrated-development`) redirect permanently.

## Inquiry form
"Inquire now" opens the existing Typeform (https://form.typeform.com/to/fPFUU89i), same as the current site.

## Deploy (Vercel)
1. Push this folder (including `_ds/`, `assets/`, `support.js`) to `edwardwest/tesseract` on `main`.
2. Vercel → New Project → import the repo → Framework preset "Other", no build command, output directory `.`.
3. Project → Domains → add `tesseract.city` and `www.tesseract.city`, then update DNS at the registrar.

All images and the homepage film are self-hosted in `assets/site/` — nothing depends on Webflow.
