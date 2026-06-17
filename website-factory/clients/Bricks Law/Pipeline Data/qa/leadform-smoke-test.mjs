import { chromium } from "playwright";

const URL = "https://bricks-law-website.vercel.app/";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(URL, { waitUntil: "networkidle" });

const form = page.locator("form").first();
await form.locator('input[name="name"]').fill("Test Lead");
await form.locator('input[name="phone"]').fill("4045551234");
await form.locator('input[name="email"]').fill("test@example.com");
await form.locator('textarea[name="case"]').fill("Smoke test case description.");
await form.locator('button[type="submit"]').click();

await page.waitForTimeout(500);
const thankYou = await page.getByText("Thank you. Your case details have been received.").isVisible();

console.log(JSON.stringify({ thankYouVisible: thankYou }));

await browser.close();
