// The guide's promise is that every fact points to an official source. These tests keep that true
// as the content changes: links, photo credits and the content data files are all checked here.
import { describe, test, expect } from "vitest";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { SOURCES } from "../../src/data/sources";
import { PHOTOS } from "../../src/data/photos";
import { ITINERARIES } from "../../src/data/itineraries";
import { CATEGORIES, THINGS_TO_DO } from "../../src/data/thingsToDo";
import { DOWNTOWN_CATEGORIES, DOWNTOWN_BUSINESSES } from "../../src/data/downtown";
import { TRAILS } from "../../src/data/trails";
import { DRIVE_TIMES } from "../../src/data/routes";

const OFFICIAL_HOSTS = ["www.knchamber.org", "mostateparks.com", "www.whiteman.af.mil", "www.google.com"];

describe("official sources", () => {
  test.each(Object.entries(SOURCES))("%s is an https link to an official host", (_key, url) => {
    const { protocol, hostname } = new URL(url);
    expect(protocol).toBe("https:");
    expect(OFFICIAL_HOSTS).toContain(hostname);
  });

  test("live directions open Google Maps with Knob Noster as the destination", () => {
    const url = new URL(SOURCES.directions);
    expect(url.origin + url.pathname).toBe("https://www.google.com/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe("Knob Noster, MO");
    expect(url.searchParams.has("origin")).toBe(false); // Google Maps fills in the visitor's own starting point
  });

  test("pages and components link out only through the sources file", () => {
    const offenders = [];
    for (const dir of ["src/pages", "src/components"]) {
      for (const file of readdirSync(dir).filter((f) => f.endsWith(".jsx"))) {
        const code = readFileSync(join(dir, file), "utf8");
        for (const [url] of code.matchAll(/https?:\/\/[^\s"'`)]+/g)) {
          if (!url.startsWith("https://api.open-meteo.com/")) offenders.push(`${file}: ${url}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});

describe("photography", () => {
  test.each(Object.entries(PHOTOS))("%s ships with its file, alt text and a public-domain credit", (_key, photo) => {
    expect(existsSync(join("public", photo.url))).toBe(true);
    expect(photo.alt.length).toBeGreaterThan(20);
    expect(photo.credit).toMatch(/Public domain$/);
    expect(new URL(photo.creditUrl).hostname).toMatch(/^(commons\.wikimedia\.org|www\.dvidshub\.net)$/);
  });
});

describe("itineraries", () => {
  const dayCount = { "Half Day": 1, "One Day": 1, "Two Days": 2 };

  test("ids are unique, because the tabs and panel are wired up by id", () => {
    expect(new Set(ITINERARIES.map((i) => i.id)).size).toBe(ITINERARIES.length);
  });

  test.each(ITINERARIES.map((i) => [i.name, i]))("%s has as many days as its label says", (_name, it) => {
    expect(it.days).toHaveLength(dayCount[it.duration]);
    if (it.days.length > 1) expect(it.days.map((d) => d.label)).toEqual(["Day One", "Day Two"]);
  });

  test.each(ITINERARIES.map((i) => [i.name, i]))("%s has a complete timeline", (_name, it) => {
    expect(it.tags.length).toBeGreaterThan(0);
    for (const row of it.days.flatMap((d) => d.rows)) {
      expect(row.time).toBeTruthy();
      expect(row.title).toBeTruthy();
      expect(row.description.length).toBeGreaterThan(30);
    }
  });
});

describe.each([
  ["Things to Do", CATEGORIES, THINGS_TO_DO],
  ["Downtown", DOWNTOWN_CATEGORIES, DOWNTOWN_BUSINESSES],
])("%s listings", (_page, categories, items) => {
  const keys = categories.map((c) => c.key);

  test("every listing belongs to a filter, and every filter shows something", () => {
    expect(keys[0]).toBe("all");
    for (const item of items) expect(keys).toContain(item.category);
    for (const key of keys.slice(1)) expect(items.some((i) => i.category === key)).toBe(true);
  });

  test("listings are numbered 01, 02, 03… with no gaps", () => {
    expect(items.map((i) => i.num)).toEqual(items.map((_, i) => String(i + 1).padStart(2, "0")));
  });
});

test("the trail shortlist gives distance, difficulty and use for each trail", () => {
  for (const trail of TRAILS) {
    expect(trail.meta[0]).toMatch(/^\d+(\.\d+)? mi$/);
    expect(trail.meta).toHaveLength(3);
  }
});

test("every drive time names a route and an approximate distance", () => {
  for (const route of DRIVE_TIMES) {
    expect(route.via).toMatch(/^via /);
    expect(route.distance).toMatch(/^About \d+ mi$/);
  }
});
