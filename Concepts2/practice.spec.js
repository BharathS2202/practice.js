

//  import { test, expect } from "@playwright/test";

// test ('Get by locators', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/angularpractice/');
//   await page.locator('form [name="name"]').fill('Bharath')
//   await page.locator('[name="email"]').fill('bharath@gmail.com')
// await page.getByLabel('Check me out if you Love IceCreams!').check()
// await page.getByLabel('Employed').check()
// await page.getByLabel('Gender').selectOption('Female')
// await page.getByAltText('Shop').click()
// await page.locator('app-card').filter({hasText:"Blackberry"}).getByRole('button').click()


// })



import { test, expect } from "@playwright/test";
import { log } from "console";

test ('Print the names of product in amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('input#twotabsearchtextbox').fill('mobile')
  await page.keyboard.press('Enter')
  await page.locator('[aria-label*="Samsung"] input').check({force:true})
  let card = await page.locator('[cel_widget_id*="MAIN-SEARCH_RESULTS"]')
  for (let i=0;i< await createReadStream.count();i++){
    let productNames=await card.nth(i).locator('h2 span').textcontent()
    let productPrice=await card.nth(i).locator('.a-price-whole').textContent()
  }
console.log('${i+1}.product name :${productNames}');
console.log('${i+1}.price :RS.${productPrice}/-');
console.log(('-----------------------------'));



})