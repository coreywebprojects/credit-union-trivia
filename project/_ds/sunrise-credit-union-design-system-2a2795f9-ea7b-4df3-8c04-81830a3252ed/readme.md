# Sunrise Credit Union — Design System

Sunrise Credit Union is a member-owned financial co-operative (Manitoba, Canada — contact: marketing@sunrisecu.mb.ca). The brand pairs a bold serif-flavoured wordmark with an abstract rising-sun symbol "symbolizing growth, optimism, and trust." Tagline: **"Building a brighter future together."**

**Source of truth:** `uploads/brand-standards.pdf` — *Sunrise Credit Union Brand Standards, September 2025* (17 pp: logo usage, colours, gradient, typography, imagery style). Full extracted text: `research/brand-standards-text.txt`. No codebase, Figma, or product UI source was provided — everything UI-level here (components, spacing, radii, the website kit) is a **brand-faithful extension**, flagged inline.

## Content fundamentals

The brand PDF is guidelines-prose, not product copy, so tone is inferred from the brand voice it describes plus its own writing:

- **Voice:** confident, warm, plain-spoken. "Confident, modern, and easy to read" is how they describe their own display face.
- **Mission language:** growth, optimism, trust, community. The tagline "Building a brighter future together" is the template: first-person-plural, future-facing, benefit-led.
- **You/we:** address the member as "you"; the credit union is "we/our." Co-operative framing ("together", "member") over corporate framing.
- **Casing:** sentence case for running copy. The name is always written **Sunrise Credit Union** — capital S, capitalized Credit and Union. **Never abbreviate**: no "SCU", "SRCU", "Sun Rise".
- **No emoji** anywhere in brand materials.
- **Formality:** professional but approachable — a rural community bank, not a fintech. Avoid hype, slang, exclamation marks.

## Visual foundations

- **Colour:** deep navy `#0D3759` anchors (wordmark, headings); warm yellow `#ECDA55` + orange `#F66201` bring the "sunrise" energy. Secondary: cream `#FFF9E2` (soft surface), gold `#FEBF10`, amber `#E97B32`. White-dominant layouts with warm accents.
- **Gradient:** the one sanctioned decorative device — Sunrise Gold `#F8D344` → Ignite Orange `#FF8000` at **102°**, "primarily used in digital assets, headers, and call-to-action areas." A stylized version with soft light arcs exists for large formats (`assets/backgrounds/stylized-gradient-bg.jpg`).
- **Type:** Bricolage Grotesque (headings; Medium→ExtraBold; letter-spacing −2%), Inter (body; Regular→Bold; −1.2%), Poppins (accent/captions; Regular/Bold/Heavy; 0%). All three are Google Fonts; exact binaries are in `assets/fonts/` with `@font-face` in `tokens/fonts.css`.
- **Imagery:** warm, sun-lit, candid lifestyle photography — golden-hour light, real everyday moments (friends in a field, farmer checking his phone, family moving in, tap-to-pay). Warm colour grade, natural settings, prairie/community flavour. No stocky corporate posing, no cool/blue grading. Samples in `assets/imagery/`.
- **Logo discipline:** colour logo on light backgrounds (≤50% black value); reversed (white) on dark (≥60%); black and one-colour blue versions approved. Never recolour, skew, rotate, add effects, or place on busy photos. Clear space and proportions are fixed.
- **Backgrounds:** white or cream fields; brand gradient for heroes/CTAs; navy for dark sections. No patterns or textures beyond the stylized gradient.
- **Derived UI conventions** (not in the PDF — defined here for consistency): 4px spacing scale; soft radii (6–24px, pill CTAs) echoing the sun arcs; navy-tinted soft shadows; hover = slight darken + shadow lift; press = darken, no shrink; ease-out motion 120–200ms, fades and gentle rises only — no bounces.

## Iconography

The brand standards define **no icon system** (no icon font, no SVG set, no emoji). For UI work this system uses **Lucide** — a rounded, 2px-stroke set that sits well with Inter — as a **flagged substitution**.

Every glyph in this system goes through the `Icon` component (`components/icons/Icon.jsx`), which loads the Lucide UMD bundle from CDN (`unpkg.com/lucide@0.474.0`) on first use and renders a named glyph at stroke-width 2, inheriting `currentColor`. **Never hand-roll SVG paths** — use `<Icon name="chevron-down" />`. Glyphs currently in use: chevron-down, chevron-right, search, arrow-right, check, x. Colour navy or `currentColor`; orange only for emphasis. Swap in official icons if the credit union supplies any.

- Logos (extracted from the PDF master, transparent PNG): `assets/logo/sunrise-logo.png` (colour, main), `sunrise-logo-tagline.png`, plus approved one-colour fills derived from the master's alpha mask: `-white.png` (reversed), `-blue.png`, `-black.png`. A text-only "wordmark" variant exists in the standards but no separate file was provided — set the name in type instead.
- Backgrounds: `assets/backgrounds/stylized-gradient-bg.jpg` (includes centered logo — use as reference or full-bleed hero).
- Imagery: 8 brand photos in `assets/imagery/`.

## Index

- `styles.css` — global entry; imports everything in `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`
- `assets/` — `logo/`, `fonts/`, `imagery/`, `backgrounds/`
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/` — React primitives (brand-guidelines-only run, standard set):
  - `actions/` — Button, IconButton
  - `forms/` — Input, Select, Checkbox, Radio, Switch
  - `display/` — Card, Badge, Tag, Tabs
  - `icons/` — Icon (Lucide wrapper)
  - `feedback/` — Dialog, Toast, Tooltip
- `ui_kits/website/` — illustrative marketing-site screens (no product source existed; flagged as extension)
- `research/` — extracted PDF text + page images
- `SKILL.md` — agent skill entry point

### Intentional additions
- **Lucide icons (CDN) + `Icon` wrapper** — no icon system in source; substitution flagged above.
- **Component set + spacing/radius/shadow/motion tokens** — the PDF is brand-only; these are derived extensions so the system is usable for product UI.
- **Website UI kit** — illustrative composition of brand foundations; not a recreation of any real Sunrise surface.
