import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/general-dentistry",
  "/services/cosmetic-dentistry",
  "/services/restorative-dentistry",
  "/services/childrens-dentistry",
  "/services/endodontics",
  "/plan-your-visit",
  "/request-appointment",
  "/legal/hipaa-notice-of-privacy-practices",
  "/legal/privacy-policy",
  "/legal/accessibility-statement",
  "/legal/non-discrimination-notice",
  "/legal/terms-of-use",
];

for (const route of routes) {
  test(`${route} renders without console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    const response = await page.goto(route, { waitUntil: "networkidle" });

    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("service deep links land on the matching treatment", async ({ page }) => {
  await page.goto("/services/general-dentistry#periodontics", {
    waitUntil: "networkidle",
  });

  await expect(page.locator("#periodontics")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Periodontal Therapy" }),
  ).toBeVisible();

  await page.goto("/services/cosmetic-dentistry#invisalign", {
    waitUntil: "networkidle",
  });

  await expect(page.locator("#invisalign")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Invisalign" })).toBeVisible();
});

test("team directory filters by role", async ({ page }) => {
  await page.goto("/about#team", { waitUntil: "networkidle" });

  const teamSection = page.locator("#team");
  const initialCards = await teamSection.locator("article").count();
  expect(initialCards).toBeGreaterThan(10);

  await teamSection.getByRole("tab", { name: /Hygienists/ }).click();

  await expect(teamSection.getByText("Dental Hygienist").first()).toBeVisible();
  await expect(teamSection.locator("article")).toHaveCount(8);
});

test("appointment form validates and submits", async ({ page }) => {
  await page.goto("/request-appointment", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page.locator('[id$="-error"]')).toHaveCount(4);

  await page.getByLabel("First name").fill("Alex");
  await page.getByLabel("Last name").fill("Test");
  await page.getByLabel("Email").fill("alex@example.com");
  await page.getByLabel("Phone").fill("701-555-0123");
  await page.getByRole("button", { name: "Continue" }).click();

  await page
    .getByLabel("I am making an appointment for")
    .selectOption("New Patient Appointment");
  await page
    .getByLabel(/I understand this is an appointment request/)
    .check();
  await page.getByRole("button", { name: "Submit request" }).click();

  await expect(
    page.getByRole("heading", { name: "Thank you, Alex." }),
  ).toBeVisible();
});

test("mobile navigation opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();

  await page.getByRole("button", { name: "Close", exact: true }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
});
