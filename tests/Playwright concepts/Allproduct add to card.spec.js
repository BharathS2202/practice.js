// const { test, expect } = require('@playwright/test');
// import SwagLabs from'./pom/Allproductpom'

// test.only("Add a product to cart", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/v1/");
    
//     const product = new SwagLabs(page);
//      await product.enterusername('standard_user');
//      await product.enterpassword('secret_sauce');
//      await product.submitclick();

//     let productNames = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
//     await product.addProductToCart(productNames);
    
//     await product.openCart();
//     await product.verifyCartItems(productNames);

//     await page.pause();
// });