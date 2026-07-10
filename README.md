# Quiet Objects — Bar Template

Config-driven website template for neighbourhood bar-restaurants: cosy room, proper food, weekly programme, weekend music — no splash specials.

## Demo venue

**The Hearth** — fictional Moville bar & restaurant used to showcase the template.

## Stack

- Vite + React
- Netlify (`netlify.toml` SPA fallback)
- Content: [`content/venue.json`](content/venue.json)

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Reskin for a client

Edit `content/venue.json`:

- Name, tagline, place, address, hours, phone
- Hero / room images
- Menu sections and items
- Weekly programme
- Booking note, map, social links

Redeploy. No redesign required for a standard venue swap.

## Sections

1. Hero — brand as hero signal + Book / Menu
2. The room — short editorial
3. Eat & drink — HTML menu with prices
4. **Order pizza** — collection-only cart (optional via `ordering.enabled`)
5. What’s on — weekly programme as culture
6. Visit — hours, landmark address, map, calm booking form
7. Footer — contact + social satellite + Quiet Objects credit

## Pizza collection orders

Configured in `content/venue.json` → `ordering`:

- Collection only (no delivery)
- Pizzas pulled from the menu section id (`pizza`)
- Cart drawer + collection time slots
- Pay on collection
- Submits to Netlify Forms (`pizza-collection`) via `public/__forms.html`

Toggle with `"enabled": false` to hide the feature per client.

## Design

Farrow & Ball–led, applied for screen:

- **Card Room Green** (deepened for UI) — brand, CTAs, prices
- **Clean paper** — light ground (School House White lifted so type doesn’t get lost)
- **Drop Cloth** — hairlines / trim only, never a bronze page wash

Fraunces (display) + Source Sans 3 (body).
