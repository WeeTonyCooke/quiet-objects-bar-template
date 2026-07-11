# Quiet Objects — extra demos

Fictional / client-demo portfolio sites. **Do not confuse with live client sites** unless noted.

| Folder | Brand | Style | Netlify site |
|---|---|---|---|
| `thedubliner-hearth/` | The Dubliner Boston (Option B) | Hearth greens + brass · Fraunces | `thedubliner-boston-demo` |
| `thedubliner/` | The Dubliner Boston (Option A) | Paper / cream · full-bleed pour | create: `thedubliner-demo` |
| `northshore-decorating/` | North Shore Decorating (Mark Keane) | Robbie Doyle / Elite Painters | `northshoredecorating-demo` |
| `quay-cars/` | Quay Cars (Seán) | Bro’s Cabs | `quaycars-demo` |
| `mossy-glen/` | The Mossy Glen (Irish links) | Bandon / Pinehurst / Kiawah | `mossyglen-golf-demo` |

Existing Netlify sites for Robbie Doyle, Bro’s Cabs, Athy Golf Club, and the live Dubliner / McGonagle’s Wix sites are separate and untouched.

## Deploy The Dubliner Option B (preferred)

Content-driven Hybrid + Light shape: `content/programme.json`, `content/menu.json`, gift-card outbound link.

Live: https://thedubliner-boston-demo.netlify.app  
Site ID: `cc412ff3-5540-4957-8e5b-e25082a4bae2`

```bash
cd "/Users/anthonymcgonagle/Documents/quiet-objects-bar-template"

npx netlify deploy --prod --dir=demos/thedubliner-hearth --site=thedubliner-boston-demo
```

Always pass `--site=…` — local link may still point at The Hearth.

## Deploy Option A

```bash
npx netlify deploy --prod --dir=demos/thedubliner --site=thedubliner-demo
```

Photos in `thedubliner*/images/` were pulled from thedublinerboston.com for a like-for-like demo. Booking CTA points at their OpenTable page. Gift cards link to Web Gift Card Sales (outbound only).
