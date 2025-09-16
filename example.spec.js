// open the browser
// naviagte to facebook
// enter valid username
// enter valid password
// click on login button

import { test } from "@playwright/test"

test("verify login with valid data", async function({page})
{
    await page.goto("https://www.facebook.com")

    await page.locator("input[data-testid*='roy']").nth(0).fill("Welcome@gmail.com")

    // await page.locator("input[data-testid^='roy']").nth(0).fill("Welcome@gmail.com")

    // await page.locator("input[data-testid='royal-email']").fill("Welcome@gmail.com")

    // await page.locator("[data-testid='royal-email']").fill("Welcome@gmail.com")

    // await page.locator(".inputtext").nth(0).fill("Welcome@gmail.com")
    // await page.locator(".inputtext").nth(1).fill("Welcome")
    // await page.locator(".inputtext").first().fill("Raju@gmail.com")

    await page.waitForTimeout(3000)

    // await page.locator("#email").fill("Raju@gmail.com")
    // await page.locator("#pass").fill("Rani@1234")

    // await page.waitForTimeout(5000)
})
