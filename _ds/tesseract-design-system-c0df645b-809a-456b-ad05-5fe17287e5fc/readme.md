# Tesseract Design System

Tesseract — "Integrated Real Estate Development" — builds luxurious, sustainable, fire-resilient homes from panelized, robot-ready building systems, starting with the post-fire rebuild of Pacific Palisades and Altadena. Sister entities: Tesseract Construction (Tier-1 GC), Build Phase Robotics, SADE (AI permitting), Tesseract Fund (Reg D).

The primary surface is the **investor presentation**. This system is derived entirely from it. There is no app or website source, so there are no UI kits — `slides/` is the product surface.

## Sources
- Origin project (ported in full): https://claude.ai/design/p/f9222e58-1d38-427c-b2c5-bec41b09bd07?file=slides%2Findex.html
- `uploads/Tesseract Investor Deck Aug 2026.pdf` — 19 slides, flattened to images. Primary source. Renders in `brand/aug/p01–p19.png`; text in `brand/aug-deck-text.txt`.
- `uploads/Tesseract October 23.2025 Presentation Investor-facing.pdf` — earlier version; text in `brand/deck-text.txt`.
- Logos (PNG/SVG) and icons (SVG) supplied separately by Tesseract. No codebase, Figma, or font files.

## Content fundamentals
- **Voice:** confident, declarative, third person ("Tesseract builds…", "We build with…"). "We" for the team, never "I". Investors addressed implicitly, rarely as "you".
- **Shape:** one strong statement per slide, often a full sentence ending in a period ("We can't afford to rebuild in the same toxic, flammable, and labor-intensive ways."). Supporting proof as 2–4 short bullets.
- **Casing:** sentence case for statements; Title Case for section titles ("Executive Team", "Ecosystem Partners") and card titles ("Global Manufacturing"). Uppercase only for tracked eyebrows (CURRENT STATUS).
- **Numbers do the selling:** "17,000 homes", "$40 billion", "80% reduction in labor", "2–4x faster", "17 states". Lead with the figure.
- **Vocabulary:** beautiful, luxurious, sustainable, fire-resilient, climate-resilient, robotic assembly, by-right, panelized, de-risk.
- **No emoji.** Unicode only for → in progression rows and • bullets.

## Visual foundations
- **Color:** strictly monochrome — black, warm near-black, taupe, stone greys, white. No accent hue; color arrives only through photography (wood, greenery, sky). Greys lean warm/olive (#8A897E, #A3A29A), never blue.
- **Backgrounds:** three grounds. (1) Pure black #000 for title, team and photo-led slides. (2) Black with a soft warm taupe glow rising from the bottom-right (`--bg-slide-glow`) — the default content ground. (3) Diagonal black→taupe (`--bg-slide-warm`). No patterns, textures or illustrations beyond product renders.
- **Type:** Helvetica Neue only (system stack; no webfont shipped). Headlines bold, tight (1.05–1.15), slight negative tracking, balanced wrap. Body regular, stone-400. Big type, few words.
- **Layout:** strong left column of text vs. a right-side photo that bleeds off the edge (often 50–55% of the width). Small white wordmark pinned top-left (24px inset) on every content slide. Generous empty black space is intentional.
- **Photography:** architectural renders and site photos — warm wood interiors, black-framed glass pavilions, trees, dusk light. Construction/robotics shots are cooler and industrial. Team headshots are black & white, square-cornered.
- **Photo treatment:** rounded corners (~24px) only on the edge facing the copy; outer edges bleed. Mosaics separated by black gutters (~16px). Full-bleed slides use a bottom black scrim for legibility.
- **Diamond badge:** the Tesseract mark on a black rotated square, placed on the seam between copy and photo. Signature motif; one per slide.
- **Cards:** flat, no shadows. Translucent white 6% fill + 1px white 12% border, radius 12px. Emphasised/target cards use a 26% border. Solid #1C1C15 cards on dark grounds. Large frosted taupe panels (radius 40px) group lists of entities.
- **Feature rows:** dark pills (#302D28, radius 10px) with a thin-line icon left and a one-line bold claim.
- **Lines:** thin white connector lines with rounded elbows and a dot terminus link callouts to illustrations.
- **Shadows / blur / transparency:** no drop shadows. Transparency for cards and the frosted panel only.
- **Motion:** none defined in source; if needed, simple fades (160ms, standard ease). No bounces.
- **Hover / press:** not applicable (presentation medium). For web use, lighten borders on hover (12% → 26%); no shrink on press.

## Deck conventions (settled in review)
- **Header logo:** `tesseract-lockup.svg`, 40px tall, 24px left / 22px top, on every content slide. Not on the title (uses the full logo) or full-bleed Progress slide.
- **Bullets:** 34px, weight 500, white, round • bullet, 30px bullet column, 40px gap, 20px indent from the headline.
- **Statement headlines:** 56px bold beside a photo; 70px for section headlines; 44–52px when the statement is long.
- **Headshots:** always square, B&W, never cropped to fit — reflow bios instead.
- **Row labels** (status rows): 24px tracked caps in a 250px column.
- **Timeline:** evenly spaced rail, milestones alternate above/below, dashed segment for future dates.
- **Full-bleed renders:** use clean renders with no baked-in text; set text on sky (grey #5F5E57) or on a bottom scrim.
- **Callouts:** use the supplied `callout-*` line SVGs, never hand-drawn lines.

## Iconography
- Supplied SVGs in `assets/icons/` (white, ~50–63px viewBox). No icon font, no sprite.
  - **Feature icons** — thin monoline pictograms for FeatureRow pills: `hard-hat` (permitted), `resilient` (fire/quake), `piggy-bank` (affordable), `stopwatch` (speed).
  - **Material icons** — white circle, grey fill, pictogram; callout terminals on the materials diagram: `material-fireproof-cladding`, `material-fiber-cement`, `material-structural-steel`, `material-stone-wool` (name→material mapping is a best guess).
  - **Callouts** — `callout-elbow`, `callout-materials`. `no-mark.png` overlays a struck circle on a photo.
- Use at 40–56px on 1920×1080 slides. Don't recolour or add strokes.
- For any icon not in the set, fall back to Lucide (1.25–1.5 stroke, white) and flag it.
- No emoji. → and • are the only glyph icons.

## Index
- `styles.css` — entry point (imports only) → `tokens/` colors, typography, spacing, effects, slide helpers
- `guidelines/` — foundation specimen cards (colors, type, spacing, radii, backgrounds, logo, icons, imagery, slide grid)
- `components/slide-parts/` — SlideHeader, DiamondBadge, Eyebrow
- `components/content/` — FeatureRow, BulletList, InfoCard, StatusPair, PersonCard
- `slides/` — 20 slide templates (01 Title → 20 Thank You); `slides/index.html` overview
- `assets/logo/` — `tesseract-full-logo.svg` (with tagline), `tesseract-lockup.svg` (header), `tesseract-mark.png` (diamond), sub-brands `tesseract-construction.svg`, `build-phase-robotics.png`, `sade.png`, `tesseract-fund.svg`
- `assets/icons/`, `assets/team/` (B&W square headshots), `assets/photos/`, `assets/illustrations/`
- `brand/` — source page renders and extracted deck text
- `SKILL.md`, `thumbnail.html`

## Intentional additions
Components are derived from recurring deck patterns (no component library existed). StatusPair comes from the MVP→Scale slide redesigned in the origin project.
