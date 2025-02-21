//  import { test, expect } from "@playwright/test";
// test("Navigate page", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const data=await page.locator("((//table[@id='product']/descendant::tr)[8]/child::td)[2]").textContent();
//     console.log(data);
//     await page.pause();
// })


// //USING CSS SELECTOR
// // import { test, expect } from "@playwright/test";
// // test("Navigate page", async ({ page }) => {
// //     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// //     // Select the 8th row and the 2nd column in the table using CSS selectors
// //     const data = await page.locator("#product:nth-child(2) tr:nth-child(8) td:nth-child(2)").textContent();
// //     console.log("Extracted Data:", data); // Print the extracted data
// //     await page.pause(); // Pause execution for debugging
// // });