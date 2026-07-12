/**
 * Shared Tonight helpers for static demos (mirrors src/lib/programme.js).
 * day: 0 = Sunday … 6 = Saturday
 */

function cueLine(rows) {
  return rows
    .map((row) => row.cue || [row.name, row.time].filter(Boolean).join(' · '))
    .join(' · ')
}

export function getTonight(programme, now = new Date()) {
  const day = now.getDay()
  const lineup = Array.isArray(programme?.lineup) ? programme.lineup : []
  const todays = lineup.filter((row) => Number(row.day) === day)
  const label = day === 0 ? 'Sunday' : 'Tonight'

  if (programme?.tonightOverride?.trim()) {
    const override = programme.tonightOverride.trim()
    return {
      day,
      label,
      short: override,
      shortGig: override,
      detail: override,
      href: '#music',
    }
  }

  if (todays.length) {
    const short = cueLine(todays)
    const gigs = todays.filter((row) => row.kind === 'music')
    const shortGig = gigs.length ? cueLine(gigs) : short
    const detail = todays
      .map(
        (row) =>
          row.detail ||
          row.cue ||
          [row.dayLabel, row.name, row.time].filter(Boolean).join(' · '),
      )
      .join(' · ')
    const href =
      (gigs.find((row) => row.href) || todays.find((row) => row.href))?.href ||
      '#music'
    return {
      day,
      label,
      short,
      shortGig,
      detail,
      href,
      items: todays,
    }
  }

  const fallback = programme?.note || 'See what’s on below'
  return {
    day,
    label: 'This week',
    short: fallback,
    shortGig: fallback,
    detail: fallback,
    href: '#music',
    items: [],
  }
}
