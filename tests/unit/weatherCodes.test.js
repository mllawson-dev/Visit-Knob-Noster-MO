import { test, expect } from "vitest";
import { describeWeatherCode, KNOB_NOSTER_COORDS } from "../../src/data/weatherCodes";

// Every WMO code Open-Meteo documents for weather_code.
const DOCUMENTED = [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99];
const KINDS = ["clear", "cloud", "fog", "rain", "snow", "storm"];

test.each(DOCUMENTED)("code %i has its own label and a known icon", (code) => {
  const { label, kind } = describeWeatherCode(code);
  expect(label).not.toBe("Mixed conditions");
  expect(KINDS).toContain(kind);
});

test("an undocumented code falls back to a neutral label instead of breaking", () => {
  expect(describeWeatherCode(42)).toEqual({ label: "Mixed conditions", kind: "cloud" });
  expect(describeWeatherCode(undefined)).toEqual({ label: "Mixed conditions", kind: "cloud" });
});

test("spot checks", () => {
  expect(describeWeatherCode(0).label).toBe("Clear sky");
  expect(describeWeatherCode(81).kind).toBe("rain");
  expect(describeWeatherCode(96).label).toBe("Thunderstorms");
});

test("coordinates point at Knob Noster, Missouri", () => {
  expect(KNOB_NOSTER_COORDS.latitude).toBeCloseTo(38.75, 1);
  expect(KNOB_NOSTER_COORDS.longitude).toBeCloseTo(-93.6, 1);
});
