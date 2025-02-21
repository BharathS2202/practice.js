// import { test, expect } from "@playwright/test";

// test('Check box', async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const valueToCheck = ["option1", "option2"];

//     for (let values of valueToCheck) {
//         await page.check(`input[value='${values}']`);
//     }

//     for (let values of valueToCheck) {
//         const isChecked = await page.locator(`input[value='${values}']`).isChecked();
//         expect(isChecked).toBe(true);
//     }

//     await page.pause();
// });
