# Voyago — Explore Beyond Boundaries

**A premium travel planning experience for flights, stays, car hire, and visa support.**

[View the live website](https://voyago-travel.vercel.app) · [GitHub repository](https://github.com/mianhamzaathar/Voyago-Explore-Beyond-Boundaries-)

## Overview

Voyago is a responsive frontend project that presents a polished travel agency experience. Visitors can explore destinations, browse sample offers, and try four interactive travel searches. It is built as a frontend assessment and demonstration: there is no booking provider, backend, or database connected.

## Features

- Responsive navigation, hero, destinations, services, travel offers, and footer.
- Flight, hotel, car rental, and visa search forms with local mock data, validation, date-range checks, loading feedback, results, and empty states.
- Travelers, cabin class, guests, rooms, car type, nationality, visa type, and destinations included in their relevant search flows.
- Testimonial carousel and save-offer controls.
- Client-side newsletter and contact form validation with clear demo-only feedback.
- GSAP hero and scroll animations, animated statistics, and reduced-motion support.
- Optimized remote travel images with fallbacks, favicon, metadata, and demo privacy and terms pages.

## Technology

- Next.js 15 App Router and React 19
- TypeScript
- Tailwind CSS v4 configuration with custom responsive CSS
- GSAP, ScrollTrigger, and `@gsap/react`
- Lucide React icons
- Local TypeScript mock datasets

## Run locally

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Project structure

```text
src/
  app/
    page.tsx          Homepage and interactive booking experience
    layout.tsx        Root layout and SEO metadata
    globals.css       Responsive design system and component styles
    icon.svg          Voyago compass favicon
    privacy/page.tsx  Demo privacy information
    terms/page.tsx    Demo terms
  data/               Flights, hotels, cars, visas, destinations, deals, testimonials
  types/              Shared TypeScript types
```

## Mock data and limitations

Search results and prices are local illustrative examples in `src/data/`. Searches do not make reservations or contact suppliers. The contact and newsletter forms validate in the browser and show demo confirmations only; they do not transmit or store form data. Displayed office and phone details are fictional. Travel photos load from Unsplash, so a network connection is needed for the photography.

## Deployment

The production site is deployed at [voyago-travel.vercel.app](https://voyago-travel.vercel.app). To publish an update, push the project to the GitHub repository and deploy it from Vercel, or use the Vercel CLI:

```bash
vercel --prod --yes --name voyago-travel
```

No environment variables are required for this demo.

## Screenshots

Add desktop and mobile screenshots here when available.
