# Voyago — Travel Agency Website

**Explore Beyond Boundaries.**

Voyago is a polished, responsive travel agency website built as a frontend development project. It brings flight, hotel, car rental, and visa search experiences together in a single, premium travel planning interface.

**Live website:** [voyago-travel.vercel.app](https://voyago-travel.vercel.app)  
**GitHub repository:** [Voyago — Explore Beyond Boundaries](https://github.com/mianhamzaathar/Voyago-Explore-Beyond-Boundaries-)

## Project overview

Voyago helps visitors explore destinations, browse sample travel deals, and try travel search flows through an interactive interface. The project emphasizes responsive layouts, reusable React components, clear form feedback, and subtle motion.

The searches use local mock data for demonstration. The website does not make reservations or connect to travel suppliers.

## Features

### Travel search

- **Flights:** origin, destination, dates, passenger count, and cabin class.
- **Hotels:** destination, check-in and check-out dates, guests, and rooms.
- **Car rentals:** pickup and drop-off locations, rental dates, and vehicle type.
- **Visas:** nationality, destination country, visa type, and travel date.
- Client-side validation, date-range checks, loading feedback, sample results, and empty states.

### Visitor experience

- Responsive navigation with a mobile menu.
- Hero section, popular destinations, services, travel deals, testimonials, contact form, newsletter form, and footer.
- Interactive testimonial carousel and save-deal controls.
- Client-side contact and newsletter form feedback.
- Privacy Policy and Terms & Conditions pages.

### Motion and accessibility

- GSAP hero entrance and scroll-triggered reveal animations.
- Animated statistics and interactive hover effects.
- Reduced-motion support and responsive layouts for mobile, tablet, and desktop.

## Technology stack

| Technology | Use |
|---|---|
| Next.js 15 App Router | Application framework and routing |
| React 19 | User interface |
| TypeScript | Typed application code |
| Tailwind CSS v4 and custom CSS | Styling and responsive design |
| GSAP, ScrollTrigger, `@gsap/react` | Animations |
| Lucide React | Interface icons |
| Local TypeScript datasets | Illustrative travel search and destination data |

## Project structure

```text
src/
  app/
    page.tsx          Homepage and travel search experience
    layout.tsx        Root layout and metadata
    globals.css       Global styles and responsive design
    icon.svg          Voyago compass favicon
    privacy/page.tsx  Privacy information
    terms/page.tsx    Terms and conditions
  data/               Flights, hotels, cars, visas, destinations, deals, testimonials
  types/              Shared TypeScript types
README.md
package.json
next.config.ts
```

## Getting started

### Requirements

- Node.js 20 or newer
- npm
- Git

### Install and run

```bash
git clone https://github.com/mianhamzaathar/Voyago-Explore-Beyond-Boundaries-.git
cd Voyago-Explore-Beyond-Boundaries-
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Run ESLint |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build locally |

Before submitting changes, run the type check, linter, and production build:

```bash
npm run typecheck
npm run lint
npm run build
```

## Demo data and limitations

This is a frontend demonstration. Search results and prices come from local sample data in `src/data/`; searches do not create bookings, contact suppliers, or process payments. Contact and newsletter forms validate in the browser and display demo feedback; they do not send or store submissions. Displayed office and phone details are illustrative. Travel photography is loaded from Unsplash and requires an internet connection.

## Deployment

The live site is hosted on Vercel: **[https://voyago-travel.vercel.app](https://voyago-travel.vercel.app)**.

To deploy updates, import the [GitHub repository](https://github.com/mianhamzaathar/Voyago-Explore-Beyond-Boundaries-) into Vercel and deploy with the default Next.js settings. You can also use the Vercel CLI:

```bash
npm install --global vercel
vercel --prod
```

No environment variables are required for the current demo.

---

**Voyago — Explore Beyond Boundaries.**  
Built with Next.js, React, TypeScript, and GSAP.
