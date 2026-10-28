// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import WeatherWidget from "../../src/components/WeatherWidget";

const forecast = {
  current: { temperature_2m: 57.6, weather_code: 0 },
  daily: {
    time: ["2026-10-28", "2026-10-29", "2026-10-30", "2026-10-31"],
    weather_code: [0, 3, 61, 95],
    temperature_2m_max: [72.4, 65.1, 60, 55.5],
    temperature_2m_min: [48.6, 44.2, 41, 38.9],
  },
};

const respond = (body, ok = true) => vi.fn(() => Promise.resolve({ ok, json: () => Promise.resolve(body) }));
const ERROR_TEXT = /Couldn't load live weather right now/;

beforeEach(() => vi.stubGlobal("fetch", respond(forecast)));
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("request", () => {
  test("asks Open-Meteo for Knob Noster in Fahrenheit, Central time, four days", () => {
    render(<WeatherWidget />);
    const url = new URL(fetch.mock.calls[0][0]);
    expect(url.origin + url.pathname).toBe("https://api.open-meteo.com/v1/forecast");
    expect(Object.fromEntries(url.searchParams)).toEqual({
      latitude: "38.7519",
      longitude: "-93.5994",
      current: "temperature_2m,weather_code",
      daily: "weather_code,temperature_2m_max,temperature_2m_min",
      temperature_unit: "fahrenheit",
      timezone: "America/Chicago",
      forecast_days: "4",
    });
  });
});

describe("states", () => {
  test("announces loading through a live region", () => {
    render(<WeatherWidget />);
    const status = screen.getByRole("status");
    expect(status).toHaveProperty("textContent", "Loading current conditions…");
    expect(status.getAttribute("aria-live")).toBe("polite");
  });

  test("shows current conditions and a four-day forecast, rounded", async () => {
    const { container } = render(<WeatherWidget />);
    expect(await screen.findByText("58°F")).toBeTruthy();
    expect(screen.getByText("Clear sky")).toBeTruthy();
    const days = [...container.querySelectorAll(".weather-day")].map((d) => d.textContent);
    expect(days).toEqual(["Today72°49°", "Tomorrow65°44°", "Fri60°41°", "Sat56°39°"]);
    expect(screen.queryByRole("status")).toBeNull();
  });

  test.each([
    ["the server returns an error status", () => respond({}, false)],
    ["the network request fails", () => vi.fn(() => Promise.reject(new TypeError("offline")))],
    ["Open-Meteo reports an error", () => respond({ error: true, reason: "Invalid coordinates" })],
    ["the payload is missing the current weather code", () => respond({ ...forecast, current: {} })],
    ["the payload is missing the daily forecast", () => respond({ current: forecast.current })],
  ])("explains the problem instead of showing a blank card when %s", async (_why, makeFetch) => {
    vi.stubGlobal("fetch", makeFetch());
    render(<WeatherWidget />);
    expect(await screen.findByText(ERROR_TEXT)).toBeTruthy();
    expect(screen.queryByText(/°F/)).toBeNull();
  });

  test("ignores a response that arrives after the widget is gone", async () => {
    let resolve;
    vi.stubGlobal("fetch", vi.fn(() => new Promise((r) => (resolve = r))));
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    const { unmount } = render(<WeatherWidget />);
    unmount();
    resolve({ ok: true, json: () => Promise.resolve(forecast) });
    await new Promise((r) => setTimeout(r, 0));
    expect(errors).not.toHaveBeenCalled();
    errors.mockRestore();
  });
});
