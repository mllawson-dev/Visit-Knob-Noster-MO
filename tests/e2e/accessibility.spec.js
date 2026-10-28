import AxeBuilder from "@axe-core/playwright";
import { test, expect, ROUTES } from "./fixtures.js";

for (const path of [...Object.keys(ROUTES), "/no-such-page"]) {
  test(`${path} has no automatically detectable accessibility issues`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    if (path === "/plan-your-visit") await expect(page.locator(".weather-day")).toHaveCount(4);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
  });
}
