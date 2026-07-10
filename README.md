# OdontoViva — Dental Clinic Landing Page

Premium, conversion-focused landing page for a dental clinic, built pixel-faithful to the
provided Figma design.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (utility-only, no component libraries)
- Framer Motion (entrance, scroll-reveal, and hover animations)
- Lucide React (icons)
- `clsx` + `tailwind-merge` for conflict-free conditional classes

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/
    Navbar/         Fixed nav, blurs + shrinks on scroll, mobile hamburger menu
    Hero/            Animated hero: gradient orbs, particles, floating glass cards
    Benefits/        "Why choose us" 4-card grid
    Treatments/      Services grid (7 treatments)
    About/           Dentist profile, credentials, signature
    BeforeAfter/      Before/after case-study cards
    Testimonials/     Auto-rotating testimonial carousel
    Stats/           Animated counters on a gradient band
    FAQ/             Accordion
    CTA/             Final WhatsApp conversion section
    Footer/
    Button/          WhatsAppButton (primary CTA) + Button (secondary outline)
    Card/            Shared fade-up/stagger card shell
    SectionTitle/    Shared "label + heading + subtitle" header
  hooks/             useCounter, useScrolled
  data/              Static content (treatments, benefits, testimonials, FAQ, stats…)
  types/             Shared TypeScript interfaces
  utils/             `cn()` class-merging helper
```

## Notes

- All copy is in Brazilian Portuguese, matching the target audience.
- The WhatsApp number and message in `src/data/constants.ts` (`WHATSAPP_URL`) are
  placeholders — update with the real clinic number before deploying.
- Dentist/patient photos are placeholder stock photography from Unsplash; swap the
  `src` values in `Hero.tsx`, `About.tsx`, `BeforeAfter.tsx`, and `Testimonials.tsx`
  for the clinic's real photos before launch.
- Respects `prefers-reduced-motion` for accessibility.
- Deploys cleanly to Vercel (static Vite build, zero server-side config needed).
