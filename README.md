# A&BC — Setup, Operate, Scale (Next.js + Tailwind)

Homepage for A&BC, a Saudi Arabia market-entry and business advisory firm, framed around a
three-stage client journey: **Setup → Operate → Scale**.

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
  WhyUs.tsx                  # differentiators (local expertise, bilingual, etc.)
  ContactBooking.tsx           # contact form + prominent WhatsApp CTA
  FloatingWhatsApp.tsx          # persistent WhatsApp button, bottom-right
  Footer.tsx
tailwind.config.ts    # brand colors, fonts, ledger-line background pattern
```

## Things to replace before launch

- **Contact form**: `ContactBooking.tsx` posts to `/api/contact` (`app/api/contact/route.ts`),
  which sends the message via [Resend](https://resend.com). To activate it:
  1. Create a free Resend account and API key.
  2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
  3. For production, verify a sending domain in Resend and set `CONTACT_FROM_EMAIL` to an
     address on that domain (the default `onboarding@resend.dev` only works for testing, and
     only delivers to the email on your Resend account).

  Until those env vars are set, submissions are simply logged to the server console so nothing
  is lost during local development — the form still shows a success message either way. Prefer
  a different provider (SendGrid, Postmark, plain SMTP)? Swap the `fetch` call inside
  `app/api/contact/route.ts`; the form component doesn't need to change.

## Customizing

- **Colors**: edit the `navy`, `ink`, `cream`, `slate`, `brass` tokens in `tailwind.config.ts`.
- **Fonts**: swapped in `app/layout.tsx` via `next/font/google`.
