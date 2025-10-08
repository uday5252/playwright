import { test, expect } from '@playwright/test';
import { BrowserUtils } from '../utils/BrowserUtils';




const browsers = [ "chromium", "firefox", "webkit" ];

    for (const browser of browsers) {

    test(`First test case running in ${browser}`, async () => {
        const browserUtils = new BrowserUtils();
        const page = await browserUtils.launchBrowser(browser);
        await page.goto("https://www.amazon.in");
        await browserUtils.closeBrowser()
    });

    test(`Second test case running in ${browser}`, async () => {
        const browserUtils = new BrowserUtils();
        const page = await browserUtils.launchBrowser(browser);
        await page.goto("https://www.facebook.com")
        await browserUtils.closeBrowser()
    });
}