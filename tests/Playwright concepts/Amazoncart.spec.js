// import { test, expect } from '@playwright/test';

// test.only('Amazon Samsung Mobile', async ({ page }) => {
//     await page.goto("https://www.amazon.in/");
//     await page.locator("input#twotabsearchtextbox").fill("samsung mobile");
//     await page.locator("input#nav-search-submit-button").click();

//     await page.waitForSelector(".s-main-slot .s-result-item", { timeout: 60000 });

    
//     for (let i = 0; i < 5; i++) {
//         await page.evaluate(() => window.scrollBy(0, window.innerHeight));
//         await page.waitForTimeout(2000);
//     }

//     const products = await page.locator(".s-main-slot .s-result-item[data-asin]").elementHandles();
//     console.log(`Found ${products.length} items, filtering for Samsung mobiles...`);

//     let samsungMobiles = [];

//     for (const product of products) {
//         try {
//             const title = await product.evaluate(el => {
//                 const titleElement = el.querySelector("h2 a span") || el.querySelector(".a-size-medium");
//                 return titleElement ? titleElement.innerText.trim() : "";
//             });

//             const price = await product.evaluate(el => {
//                 const priceWhole = el.querySelector(".a-price-whole");
//                 const priceFraction = el.querySelector(".a-price-fraction");
//                 return priceWhole ? `₹${priceWhole.innerText}${priceFraction ? priceFraction.innerText : ""}` : "";
//             });

//             const isMobile = /galaxy|mobile|smartphone|5g/i.test(title) && !/case|cover|accessory|charger/i.test(title);

//             if (title && title.toLowerCase().includes("samsung") && price && isMobile) {
//                 samsungMobiles.push({ title, price });
//             }
//         } catch (error) {
//             console.log("Error fetching product:", error);
//         }
//     }

//     // Print only Samsung mobiles
//     if (samsungMobiles.length > 0) {
//         console.log(`Found ${samsungMobiles.length} Samsung mobiles:`);
//         samsungMobiles.forEach(({ title, price }, index) => {
//             console.log(`(${index + 1}) Title: ${title}`);
//             console.log(`    Price: ${price}`);
//             console.log("---------------------------");
//         });
//     } else {
//         console.log("No Samsung mobiles found.");
//     }
// });



// import { test, expect } from "@playwright/test";

// test.only("Get all Samsung mobiles", async ({ page }) => {
//   console.log("Test started");

//   await page.goto("https://www.amazon.in/s?k=Mobiles");
//   await page.locator("a[aria-label*='Samsung']").click();
//   await page.waitForSelector(".s-main-slot");

//   for (let i = 0; i < 10; i++) {
//     await page.evaluate(() => window.scrollBy(0, window.innerHeight));
//     await page.waitForTimeout(2000);
//   }

//   console.log("Finished scrolling. Extracting data...");
//   const mobiles = await page.$$("div.s-main-slot div[data-component-type='s-search-result']");
//   console.log(` No Samsung Mobiles Found: ${mobiles.length}`);

//   for (let i = 0; i < mobiles.length; i++) {
//     const nameElement = await mobiles[i].$("a h2 span");
//     const priceElement = await mobiles[i].$(".a-price-whole");

//     const name = nameElement ? (await nameElement.textContent())?.trim() || "No Name" : "No Name";
//     const price = priceElement ? `₹${(await priceElement.textContent())?.trim() || "No Price"}` : "No Price";

//     console.log(` Mobile ${i + 1}: ${name} - ${price}`);
//   }

//   console.log("Test completed.");
//   await page.pause();
// });





//  import { test, expect } from "@playwright/test";

// test ('Get by locators', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/angularpractice/');
//   await page.locator('[minlength="2"]').fill('Bharath')
//   await page.locator('[name="email"]').fill('bharath@gmail.com')
//   await page.getByPlaceholder('Password').fill('bhbhbhbhb')
//   await page.getByLabel('Check me out if you Love IceCreams!').check()
//   await page.getByLabel('Employed').check()
//   await page.getByLabel('Gender').selectOption('Female')
//   await page.pause()
//   await page.getByText('Shop').click()
//   await page.locator('app-card').filter({hasText:"Blackberry"}).getByRole('button').click()
//   await page.pause()

// })


import { test, expect } from "@playwright/test";
import { log } from "console";

test ('Print the names of product in amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('input#twotabsearchtextbox').fill('mobile')
  await page.keyboard.press('Enter')
  await page.locator('[aria-label*="Samsung"] input').check({force:true})
  let card = await page.locator('[role="listitem"]')
  for (let i=0;i< await card.count();i++){
    let productNames=await card.nth(i).locator('h2 span').textcontent()
    let productPrice=await card.nth(i).locator('.a-price-whole').textContent()
  }
console.log('${i+1}.product name :${productNames}');
console.log('${i+1}.price :RS.${productPrice}/-');
console.log(('-----------------------------'));



})