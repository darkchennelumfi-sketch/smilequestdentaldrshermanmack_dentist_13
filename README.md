# SmileQuest Dental

A modern website for SmileQuest Dental in Devils Lake, North Dakota. The content is based on the practice's existing site, rebuilt with Next.js App Router, TypeScript, Tailwind CSS v4, Radix primitives, Motion, Zod, and React Hook Form.

## Routes

- `/` — practice overview, values, services, treatments, reviews, team, and visit information
- `/about` — practice story, dentist profiles, full team directory, approach, and vision
- `/services` — service index with treatment highlights
- `/services/[slug]` — general, cosmetic, restorative, children’s, and endodontic care
- `/plan-your-visit` — first-visit checklist, imaging, map, hours, and FAQ
- `/request-appointment` — two-step appointment request form with draft saving
- `/legal/[slug]` — HIPAA notice, privacy policy, accessibility statement, non-discrimination notice, and terms of use

## Commands

```bash
npm run dev        # start the development server
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run test:e2e   # Playwright smoke and interaction tests
```

The Playwright suite starts a development server automatically when one is not already running.

## Content

Business information, navigation, services, treatment details, reviews, FAQs, legal copy, and team profiles live in `lib/site.ts`, `lib/services.ts`, `lib/team.ts`, and `lib/legal.ts`.

The appointment request is validated with Zod on the client and in the API route. In this preview the route logs the request for the practice; connect it to the practice's delivery endpoint before launch.

## Assets

Images, service icons, the logo, and the favicon are stored in `public/` and served through `next/image`.
