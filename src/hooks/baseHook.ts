import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser: Browser
let page: Page

setDefaultTimeout(15000);

Before(async function () {
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
    page = await browser.newPage();
});

After(async function () {
    await page.close();
    await browser.close();
});

export function getPage(): Page { 
    return page 
};