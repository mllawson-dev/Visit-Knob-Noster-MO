import { test, expect, ROUTES } from "./fixtures.js";

for (const [path, title] of Object.entries(ROUTES)) {
  test.describe(path, () => {
    test("loads with its own title and a single h1", async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(title);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toBeVisible();
    });

    test("fits the screen: no sideways scroll, and no text against the edge", async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      // Regression test: the homepage hero once lost its side padding on phones.
      const touching = await page.evaluate(() =>
        [...document.querySelectorAll("main :is(h1, h2, h3, p, li, a.btn)")]
          .filter((el) => {
            const box = el.getBoundingClientRect();
            return box.width > 0 && (box.left < 12 || box.right > window.innerWidth - 12);
          })
          .map((el) => `${el.tagName.toLowerCase()}: ${el.textContent.trim().slice(0, 40)}`)
      );
      expect(touching).toEqual([]);
    });
  });
}

test("an unknown address shows the 404 page with a way back", async ({ page }) => {
  await page.goto("/no-such-page");
  await expect(page).toHaveTitle("Page Not Found | Visit Knob Noster");
  await expect(page.locator("h1")).toContainText("Wrong");
  await page.getByRole("link", { name: "Visitor overview" }).click();
  await expect(page).toHaveURL("/");
});

test("moving between pages updates the title, scrolls to the top and focuses the new heading", async ({ page }) => {
  await page.goto("/");
  await page.mouse.wheel(0, 2000);
  await page.getByRole("contentinfo").getByRole("link", { name: "Printable Visitor Guide" }).click();
  await expect(page).toHaveURL("/visitor-guide");
  await expect(page).toHaveTitle(ROUTES["/visitor-guide"]);
  await expect(page.locator("h1")).toBeFocused();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
});

test("the skip link jumps past the header to the main content", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard navigation is checked on desktop");
  await page.goto("/state-park");
  const skip = page.getByRole("link", { name: "Skip to content" });
  const first = await page.evaluate(() => document.querySelector("a[href], button, [tabindex='0']")?.textContent.trim());
  expect(first).toBe("Skip to content");
  await skip.focus();
  await expect(skip).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});
