// import { test, expect } from '@playwright/test';
// const details = require('./datas/datadriven.json');
// test('Saucedemo', async ({ page }) => {
//   await page.goto("https://www.saucedemo.com/v1/");
//   await page.locator("input[type=text]").fill(details.username);
//   await page.locator("input[type=password]").fill(details.password);
//   await page.locator("input[type=submit]").click();
  
//   let datas=["Sauce Labs Backpack,Sauce Labs Bike Light"]
//   for(let data of datas) {

//     let allproducts = await page.locator('.inventory_item')
//     let count = await allproducts.count()
//     for(let i = 0;i<count;i++) {
//       let productname = await allproducts.nth(1)

//     }

  
//   }
// });