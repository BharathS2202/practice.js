//  import { test, expect } from "@playwright/test";
// test("new tab ", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const [newPage]=await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator("fieldset #opentab").click()
// ])
// await newPage.waitForLoadState();
// console.log(await newPage.title());
// await newPage.locator("[class='navbar-nav ml-auto'] li a[href='about.html']").click();
// await newPage.pause();
   
// })