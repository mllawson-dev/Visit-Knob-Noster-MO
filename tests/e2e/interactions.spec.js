import { test, expect } from "./fixtures.js";

test.describe("mobile menu", () => {
  test.skip(({ isMobile }) => !isMobile, "the menu button only appears on small screens");

  test("opens, reports its state, and closes after choosing a page", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await expect(page.getByRole("button", { name: "Close" })).toHaveAttribute("aria-expanded", "true");
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "State Park" }).click();
    await expect(page).toHaveURL("/state-park");
    await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("itinerary tabs", () => {
  test("can be chosen with a click", async ({ page }) => {
    await page.goto("/itinerary");
    await page.getByRole("tab", { name: /Weekend Getaway/ }).click();
    await expect(page.getByRole("tab", { name: /Weekend Getaway/ })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toContainText("Day One");
    await expect(page.getByRole("tabpanel")).toContainText("Day Two");
  });

  test("follow the ARIA tabs keyboard pattern", async ({ page, isMobile }) => {
    test.skip(isMobile, "keyboard navigation is checked on desktop");
    await page.goto("/itinerary");
    const tabs = page.getByRole("tab");
    await tabs.first().focus();
    await page.keyboard.press("ArrowRight");
    await expect(tabs.nth(1)).toBeFocused();
    await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
    await page.keyboard.press("End");
    await expect(tabs.nth(2)).toBeFocused();
    await page.keyboard.press("ArrowRight");
    await expect(tabs.nth(0)).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    await expect(tabs.nth(2)).toBeFocused();
    await page.keyboard.press("Home");
    await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel").locator(".itin-head h3")).toHaveText("The Perfect Day");
    await expect(tabs.nth(1)).toHaveAttribute("tabindex", "-1");
  });
});

for (const [path, filter, expected] of [
  ["/things-to-do", "Outdoors", 3],
  ["/downtown", "Food & Drink", 3],
]) {
  test(`${path} filters listings and marks the active filter`, async ({ page }) => {
    await page.goto(path);
    const button = page.getByRole("button", { name: filter, exact: true });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: "All", exact: true })).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(`main article`)).toHaveCount(expected);
  });
}
