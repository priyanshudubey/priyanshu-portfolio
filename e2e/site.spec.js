import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const sections = ["about", "experience", "projects", "skills", "education"];

test("prerendered HTML contains the page content without JS", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Priyanshu");
  await expect(page.locator("#experience")).toContainText("Tata Consultancy Services");
  await expect(page.locator("#projects")).toBeVisible();
  await context.close();
});

test("has no serious accessibility violations (light and dark)", async ({ page }) => {
  for (const scheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme: scheme, reducedMotion: "reduce" });
    await page.goto("/");
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((v) => ["serious", "critical"].includes(v.impact));
    expect(
      serious,
      `${scheme}: ${JSON.stringify(serious.map((v) => [v.id, v.nodes.length]))}`,
    ).toEqual([]);
  }
});

test("nav highlights the section in view", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop nav only");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main" });

  for (const id of sections) {
    await nav.locator(`a[href="#${id}"]`).click();
    await expect(nav.locator(`a[href="#${id}"]`)).toHaveAttribute("aria-current", "location");
  }
});

test("mobile menu opens, navigates and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );

  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-menu")).toBeHidden();

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Projects" }).click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await expect(page.locator("#projects-title")).toBeInViewport();
});

test("theme toggle switches and persists", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");
  await page.getByRole("button", { name: "Switch to dark theme" }).first().click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("no horizontal overflow", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(0);

  // <main> clips overflow, so also check that nothing is pushed past the screen
  // edge (content inside its own scroll container, like code blocks, is fine).
  const clipped = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    return [...document.querySelectorAll("main *")]
      .filter((el) => !el.closest("pre, .marquee-row, [aria-hidden='true']"))
      .filter((el) => el.getBoundingClientRect().right > vw + 1)
      .slice(0, 5)
      .map((el) => `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)}`);
  });
  expect(clipped).toEqual([]);
});

test("loads without console errors or hydration warnings", async ({ page }) => {
  const errors = [];
  page.on("console", (msg) => ["error", "warning"].includes(msg.type()) && errors.push(msg.text()));
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(errors).toEqual([]);
});

test("hero shows the latest YouTube upload and plays it on demand", async ({ page }) => {
  const { video } = JSON.parse(
    await import("node:fs").then((fs) => fs.readFileSync("src/data/youtube.json", "utf8")),
  );
  await page.goto("/");
  // Nothing from YouTube's player loads until the visitor asks for it.
  await expect(page.locator("#home iframe")).toHaveCount(0);
  await page.getByRole("button", { name: /^Play/ }).click();
  const iframe = page.locator("#home iframe");
  await expect(iframe).toHaveCount(1);
  expect(await iframe.getAttribute("src")).toContain(`youtube-nocookie.com/embed/${video.id}`);
});
