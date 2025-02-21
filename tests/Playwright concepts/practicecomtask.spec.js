// //invalid username

// import { test, expect } from '@playwright/test';

// test('test',async ({ page }) => {
//   await page.goto("https://practicetestautomation.com/practice-test-login/");
//   await page.locator("input#username").fill("sharvesh");
//   await page.locator("input#password").fill("Password123");
//   await page.locator("button#submit").click();
//   await expect(page.locator("div#error")).toBeVisible();
//   await expect(page.locator("div#error")).toHaveText("Your username is invalid!");
// });



// // //invalid password

// // import { test, expect } from '@playwright/test';

// // test('test',async ({ page }) => {
// //   await page.goto("https://practicetestautomation.com/practice-test-login/");
// //   await page.locator("input#username").fill("student");
// //   await page.locator("input#password").fill("sharvesh");
// //   await page.locator("button#submit").click();
// //   await expect(page.locator("div#error")).toBeVisible();
// //   await expect(page.locator("div#error")).toHaveText("Your password is invalid!");
// // });