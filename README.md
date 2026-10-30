# Visit Knob Noster

A responsive React visitor guide for Knob Noster, Missouri: things to do, the state park, downtown, sample itineraries and trip planning, with live local weather.

**[Live site](https://visit-knob-noster-mo.vercel.app/)**

## What I built

- Converted static HTML mockups into a React app with reusable components (header, footer, page hero, section heads, day timeline) and content kept in data files.
- **Live weather** from the Open-Meteo API, with loading and error states.
- Itinerary pages built from structured data, so a new trip plan is a data change, not a new page.
- Plain-language accessibility and contact pages.

## Content and sources

This is an independent portfolio concept, not an official tourism site. Visitor facts were checked against the Knob Noster Chamber of Commerce, Missouri State Parks, the U.S. Air Force, the Missouri Department of Conservation and the U.S. Census. The site sends visitors to the official source for hours, access rules and events.

Photography: Knob Noster State Park images from Missouri State Parks (public domain, via Wikimedia Commons). B-2 Spirit image: U.S. Air Force photo by Airman 1st Class Hailey Farrell (public domain, via DVIDS).

## Testing

- **Unit and data tests** (Vitest): every official link is https and points to an official host, pages link out only through `src/data/sources.js`, every photo ships with its file, alt text and a public-domain credit, itineraries and listings are complete, every Open-Meteo weather code has a label, and the weather widget's request, loading, success and five failure cases.
- **Browser tests** (Playwright, desktop and phone): every page's title, heading, focus and layout (no sideways scroll, no text against the screen edge), the mobile menu, the itinerary tabs keyboard pattern, the filters, weather with a mocked Open-Meteo response and outage, the Google Maps directions link, and an axe-core accessibility scan of every page (WCAG 2.2 AA).
- GitHub Actions runs lint and both suites on every push and pull request.

## Run locally

```sh
npm install
npm run dev
npm run lint
npm test                              # unit and data tests
npx playwright install chromium       # once
npm run test:e2e                      # browser and accessibility tests
npm run build
```

---

Designed and built by **Michael L. Lawson**, design engineer and creative developer · [mll-creativeeng.com](https://www.mll-creativeeng.com) · [LinkedIn](https://www.linkedin.com/in/michael-lawson-a7707924)
