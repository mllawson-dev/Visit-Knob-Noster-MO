import { test as base, expect } from "@playwright/test";

export const ROUTES = {
  "/": "Visit Knob Noster, Missouri",
  "/things-to-do": "Things to Do in Knob Noster | Visit Knob Noster",
  "/state-park": "Knob Noster State Park Guide | Visit Knob Noster",
  "/downtown": "Downtown Knob Noster | Visit Knob Noster",
  "/plan-your-visit": "Plan a Trip to Knob Noster | Visit Knob Noster",
  "/itinerary": "Knob Noster Itineraries | Visit Knob Noster",
  "/visitor-guide": "Printable Knob Noster Visitor Guide",
  "/accessibility": "Accessibility | Visit Knob Noster",
  "/contact": "Visitor Contacts | Visit Knob Noster",
};

export const FORECAST = {
  current: { temperature_2m: 57.6, weather_code: 0 },
  daily: {
    time: ["2026-10-28", "2026-10-29", "2026-10-30", "2026-10-31"],
    weather_code: [0, 3, 61, 95],
    temperature_2m_max: [72.4, 65.1, 60, 55.5],
    temperature_2m_min: [48.6, 44.2, 41, 38.9],
  },
};

// Every test runs against a canned Open-Meteo response so results never depend on today's weather
// or on the API being up. Tests that need a different answer call weather.respond() before navigating.
export const test = base.extend({
  weather: [async ({ context }, use) => {
    const state = { status: 200, body: FORECAST, requests: [] };
    await context.route("https://api.open-meteo.com/**", (route) => {
      state.requests.push(new URL(route.request().url()));
      return route.fulfill({ status: state.status, contentType: "application/json", body: JSON.stringify(state.body) });
    });
    await use({
      requests: state.requests,
      respond(status, body) {
        state.status = status;
        state.body = body;
      },
    });
  }, { auto: true }],
});

export { expect };
