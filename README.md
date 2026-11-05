# A&BC — Setup, Operate, Scale (Next.js + Tailwind)

Homepage for Accelerators & Business Consultants, a Sri Lanka-based consultancy firm with footprints in the Kingdom of Saudi Arabia and the Sultanate of Brunei, helping businesses set up and scale

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx           # root layout, loads Fraunces / Inter / IBM Plex Mono via next/font
  page.tsx              # composes all sections
  globals.css           # Tailwind directives + small base tweaks
components/
  Header.tsx             # fixed nav with mobile menu
  Hero.tsx                # "From A to B to C" headline + WhatsApp CTA
  StageTrackerCard.tsx     # signature widget: A/B/C journey status, client component
  ContactBooking.tsx           # contact form + prominent WhatsApp CTA
  FloatingWhatsApp.tsx          # persistent WhatsApp button, bottom-right
  StatsBar.tsx
  Typewriter.tsx
  Footer.tsx
tailwind.config.ts    # brand colors, fonts, ledger-line background pattern
```

## Customizing

- **Colors**: edit the `navy`, `ink`, `cream`, `slate`, `brass` tokens in `tailwind.config.ts`.
- **Fonts**: swapped in `app/layout.tsx` via `next/font/google`.
