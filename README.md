# Voyago — Explore Beyond Boundaries

A premium, responsive travel agency experience built as a frontend technical assessment. Voyago helps travelers explore destinations and compare illustrative flight, hotel, car rental, and visa options through local mock data.

## Features

- Responsive editorial landing page, mobile navigation, destination cards, travel deals, and testimonial carousel.
- Four booking tabs with required-field/date validation, loading feedback, local filtering, results, and empty states.
- Client-side newsletter and contact form validation and submission feedback.
- Scroll reveals, hero animation, and viewport-triggered statistics using GSAP and ScrollTrigger; animations honor reduced-motion preferences.
- SEO metadata, semantic landmarks, accessible labels, keyboard-operable controls, and responsive layouts.

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS v4, GSAP, @gsap/react, ScrollTrigger, and Lucide React.

## Project structure

```text
src/
  app/       App Router page, layout, global styles, favicon, and demo legal pages
  data/      Typed local mock datasets for searches and content
  types/     Shared TypeScript types
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck`, `npm run lint`, `npm run build`, then `npm start` to serve the production build.

## Mock functionality

Booking searches filter local TypeScript datasets and show illustrative USD prices; no reservations or external API calls are made. Newsletter and contact submissions validate and show frontend-only confirmation. Contact information uses fictional `voyago.example` details. The `/privacy` and `/terms` pages explain these demo limitations. Destination photography is served from Unsplash URLs.

## Screenshots

Add desktop and mobile screenshots here after running the site locally.

## Deployment

Initialize Git in this folder and push it to a new GitHub repository, then import that repository into Vercel and deploy with the default Next.js settings. This project folder currently has no Git repository or remote configured. It requires no secrets or environment variables. Vercel will run the Next.js production build automatically.

## Assessment coverage

The project includes the requested four travel services and mock search journeys, responsive premium interface, GSAP effects, reusable typed content/data, SEO metadata, README, Git ignore rules, and Vercel-compatible Next.js configuration. It is not connected to a booking provider and has not been deployed.
