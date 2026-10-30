import { test, expect } from "./fixtures.js";

test.describe("weather", () => {
  test("shows live conditions and four days from Open-Meteo", async ({ page, weather }) => {
    await page.goto("/plan-your-visit");
    const card = page.locator(".weather-card");
    await expect(card).toContainText("58°F");
    await expect(card).toContainText("Clear sky");
    await expect(card.locator(".weather-day")).toHaveCount(4);
    const url = weather.requests[0];
    expect(url.searchParams.get("temperature_unit")).toBe("fahrenheit");
    expect(url.searchParams.get("timezone")).toBe("America/Chicago");
    expect(url.searchParams.get("forecast_days")).toBe("4");
  });

  test("tells the visitor what to do when the service is down", async ({ page, weather }) => {
    weather.respond(503, { error: true, reason: "Service unavailable" });
    await page.goto("/plan-your-visit");
    await expect(page.getByRole("status")).toContainText("check a forecast site before you head out");
    await expect(page.locator(".weather-card")).not.toContainText("°F");
  });
});

test.describe("directions", () => {
  test("Open live directions hands off to Google Maps in a new tab", async ({ page }) => {
    await page.goto("/plan-your-visit");
    const link = page.getByRole("link", { name: /Open live directions/ });
    await expect(link).toHaveAttribute("href", "https://www.google.com/maps/dir/?api=1&destination=Knob+Noster%2C+MO");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  });

  test("the visitor guide uses the same directions link", async ({ page }) => {
    await page.goto("/visitor-guide");
    await expect(page.getByRole("link", { name: "Open driving directions" })).toHaveAttribute("href", /google\.com\/maps\/dir\//);
  });
});

test.describe("official links and credits", () => {
  for (const path of ["/", "/state-park", "/visitor-guide", "/contact", "/downtown"]) {
    test(`${path}: every outside link opens safely in a new tab`, async ({ page }) => {
      await page.goto(path);
      const external = page.locator('a[href^="http"]');
      expect(await external.count()).toBeGreaterThan(0);
      for (const link of await external.all()) {
        await expect(link).toHaveAttribute("target", "_blank");
        await expect(link).toHaveAttribute("rel", /noreferrer/);
      }
    });
  }

  test("every photo on the homepage is credited with a link to its source", async ({ page }) => {
    await page.goto("/");
    const credits = page.locator("a.photo-credit");
    await expect(credits).toHaveCount(3);
    for (const credit of await credits.all()) {
      await expect(credit).toContainText(/Public domain/);
      await expect(credit).toHaveAttribute("href", /^https:\/\/(commons\.wikimedia\.org|www\.dvidshub\.net)\//);
    }
  });
});
