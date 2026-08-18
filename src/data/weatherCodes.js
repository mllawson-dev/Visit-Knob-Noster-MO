// Maps Open-Meteo's WMO weather codes to a label and icon kind.
// https://open-meteo.com/en/docs (WMO Weather interpretation codes)
export function describeWeatherCode(code) {
  if (code === 0) return { label: "Clear sky", kind: "clear" };
  if (code === 1) return { label: "Mostly clear", kind: "clear" };
  if (code === 2) return { label: "Partly cloudy", kind: "cloud" };
  if (code === 3) return { label: "Overcast", kind: "cloud" };
  if (code === 45 || code === 48) return { label: "Foggy", kind: "fog" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "Drizzle", kind: "rain" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "Rain", kind: "rain" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "Snow", kind: "snow" };
  if ([95, 96, 99].includes(code)) return { label: "Thunderstorms", kind: "storm" };
  return { label: "Mixed conditions", kind: "cloud" };
}

// Knob Noster, MO coordinates
export const KNOB_NOSTER_COORDS = { latitude: 38.7519, longitude: -93.5994 };
