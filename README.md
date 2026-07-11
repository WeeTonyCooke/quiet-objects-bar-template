# Quiet Objects — Bar Template

Config-driven website template for neighbourhood bar-restaurants: cosy room, proper food, weekly programme, weekend music — no splash specials.

**Product:** Hybrid + Light — the bar edits music / Tonight and a light menu; Quiet Objects owns design and structure.

## Demo venue

**The Hearth** — fictional Moville bar & restaurant used to showcase the template.

## Stack

- Vite + React
- Netlify (`netlify.toml` SPA fallback)
- Content: `content/programme.json` + `content/menu.json` (bar) · `content/venue.json` (Quiet Objects)
- Admin: Decap CMS + Netlify Identity at `/admin/` — see [`docs/CMS-ADMIN.md`](docs/CMS-ADMIN.md)

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

CMS locally: `npx decap-server` then open `/admin/`.

## Reskin for a client

Quiet Objects edits `content/venue.json` (name, place, hours, booking, gift-card URL, ordering).

Bar staff edit Programme + Menu in `/admin/` after Identity invite.

## Sections

1. Hero — brand as hero signal + Book / Menu
2. The room — short editorial
3. Eat & drink — light menu from JSON
4. **Order pizza** — collection-only cart (optional via `ordering.enabled`)
5. What’s on — weekly programme + live Tonight cue
6. Visit — hours, landmark address, map, calm booking form
7. Footer — contact + social + optional gift-card link + Quiet Objects credit

## Gift cards

Outbound link only (`venue.giftCards.url`). No checkout on Quiet Objects.

## Design

Farrow & Ball–led, applied for screen:

- **Card Room Green** (deepened for UI) — brand, CTAs, prices
- **Clean paper** — light ground
- **Drop Cloth** — hairlines / trim only

Fraunces (display) + Source Sans 3 (body).

## Docs

- [`docs/NEXT-STEPS.md`](docs/NEXT-STEPS.md) — what to do next (PR, Identity, Oran pilot)
- [`docs/CONTENT-MODEL.md`](docs/CONTENT-MODEL.md) — JSON schema
- [`docs/CMS-ADMIN.md`](docs/CMS-ADMIN.md) — Identity + Decap
- [`docs/ORAN-PILOT.md`](docs/ORAN-PILOT.md) — pilot field set
- [`docs/MENU-UPGRADE.md`](docs/MENU-UPGRADE.md) — full multi-service path
- [`docs/DESIGN-PRINCIPLES.md`](docs/DESIGN-PRINCIPLES.md)
