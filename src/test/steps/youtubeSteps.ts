import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getPage } from "../../hooks/baseHook"


When('I go to page {string}', async function (channelUrl) {
    await getPage().goto(channelUrl);
});


Then('I verify YouTube channel name {string}', async function (expectedChannelName) {
    const channelName = await getPage().locator('xpath=//*[contains(@class, "page-header-title")]').innerText();
    expect(channelName).toBe(expectedChannelName);
});