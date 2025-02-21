// // @ts-check
// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//});


// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.getByRole('textbox', { name: 'Username' }).fill('student');
//   await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Password' }).fill('P');
//   await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
//   await page.getByRole('textbox', { name: 'Password' }).press('Tab');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
// });




// import { test, expect } from "@playwright/test";

// test('validate positive login', async ({ page }) => {
//   await page.goto('https://practicetestautomation.com/practice-test-login/');
//   await page.locator('input#username').fill('student');
//   await page.locator('input#password').fill('Password123');
// await page.locator('[id="submit"]').click();
//   await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
//   await expect(page.locator('p strong')).toHaveText('Congratulations student. You successfully logged in!');
//     await expect(page.locator('[class*=wp-block-button__]')).toBeVisible();
// });



// import { test, expect } from "@playwright/test";

// test('validate positive login', async ({ page }) => {
//   await page.goto('https://www.amazon.in/ref=nav_logo');
//   await page.locator('[id=twotabsearchtextbox]').fill('iphone 16');
//   await page.locator('[type="submit"]').click();
//   await page.locator('[id=a-autoid-1-announce]').click();
//   await page.locator('div[id=nav-cart-text-container]').click();
//   await page.pause()
// });

//to select radiobutton

// import { test, expect } from "@playwright/test";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   await page.locator('input[value="radio3"]').check()
//   await expect(page.locator('input[value="radio3"]')).toBeChecked()
//   //await page.pause()
  
// });


// //to select multiple many options at a time :

// import { test, expect } from "@playwright/test";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// const ValuesToCheck=['option2','option3']
// for (let value of ValuesToCheck){
//   await page.check('label[value="${value}"]')
// }
// for (let value of ValuesToCheck){
//   const ischecked=await page.isChecked('label[value="${value}"')
//   await page.check('label[value="${value}"]')

// }
// //await page.pause()
// });


//  import { test, expect } from "@playwright/test";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   const dropdownstatic=await page.locator('select[id="dropdown-class-example"]')
//   await dropdownstatic.selectOption('option3')
//   await page.pause()
// });

// import { test, expect } from "@playwright/test";

// test.only('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   const input = await page.locator('input[id="autocomplete"]')
//   const dropdownOptions = await page.locator('.ui-menu-item-div')
//   await input.fill('In')
//   //await dropdownOptions.first().waitFor()
//   let options=await dropdownOptions.allTextContents()
//   const countrytoselect= "India"
// for(let i=0;i<options.length;i++)
//   if(options[i].trim()===countrytoselect){
//     await dropdownOptions.nth(i).selectText()
//     break;
//   }
//   await page.pause()
// });



//  import { test, expect } from "@playwright/test";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   const frame=await page.frame({name:'iframe-name'})
//   await frame.locator('[class="navbar-collapse collapse clearfix"] ul li a[href="mentorship"]').first().click()
//   await page.pause()
// });

//swag labs


//  import { test, expect } from "@playwright/test";

// test ('validate positive login', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   await page.locator('[id="user-name"]').fill('standard_user');
//   await page.locator('[id="password"]').fill('secret_sauce')
//   await page.locator('input[id="login-button"]').click();
//   await page.locator('button[class="btn_primary btn_inventory"]').first().click();
//   await page.locator('button[class="btn_primary btn_inventory"]').last().click();
//   await page.locator('[fill="currentColor"]').click()
//   await page.locator('[class="btn_action checkout_button"]').click()
//   await page.locator ('[id="first-name"]').fill('Bharath')
//   await page.locator ('[id="last-name"]').fill('S')
//   await page.locator ('[id="postal-code"]').fill('641104')
//   await page.locator('[type="submit"]').click()
//   await page.locator('[class="btn_action cart_button"]').click()
  
//   await expect(priceLocators.first()).toBeVisible();
//   await expect(priceLocators.last()).toBeVisible();

//   const value1 = parseFloat(await priceLocators.first().textContent());
//   const value2 = parseFloat(await priceLocators.last().textContent());

//   const expectedSubtotal = value1 + value2;

//   const subtotalLocator = page.locator('[class="summary_subtotal_label"]');
//   await expect(subtotalLocator).toBeVisible();
//   const subtotalText = await subtotalLocator.textContent();
//   const subtotalOnPage = parseFloat(subtotalText.match(/[\d.]+/)[0]);
//   expect(subtotalOnPage).toBeCloseTo(expectedSubtotal, 2);
// await page.pause()
// });



//to open a new tab :

//  import { test, expect } from "@playwright/test";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//   page.on("dialog",(dialog)=>dialog.accept())
//   await page.locator('#confirmbtn').click()
//   const [newPage]= await Promise.all([
//     await page.content('popup'),
//     await page.locator('fieldset #opentab').click()
//        ])
//        await page.pause()
// })


// import { test, expect } from "@playwright/test";

// test('validate positive login', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/v1/');
//   await page.locator('[id="user-name"]').fill('standard_user');
//   await page.locator('[id="password"]').fill('secret_sauce');
//   await page.locator('input[id="login-button"]').click();
//   await page.locator('button[class="btn_primary btn_inventory"]').first().click();
//   await page.locator('button[class="btn_primary btn_inventory"]').last().click();
//   await page.locator('[fill="currentColor"]').click();
//   await page.locator('[class="btn_action checkout_button"]').click();
//   await page.locator('[id="first-name"]').fill('Bharath');
//   await page.locator('[id="last-name"]').fill('S');
//   await page.locator('[id="postal-code"]').fill('641104');
//   await page.locator('[type="submit"]').click();

//   const priceLocators = page.locator('[class="inventory_item_price"]');
  
//   await expect(priceLocators.first()).toBeVisible();
//   await expect(priceLocators.last()).toBeVisible();

//   const value1Text = await priceLocators.first().textContent();
//   const value2Text = await priceLocators.last().textContent();

//   const value1 = parseFloat(value1Text.replace('$', ''));
//   const value2 = parseFloat(value2Text.replace('$', ''));

//   console.log(`Value1: ${value1}, Value2: ${value2}`); 

//   if (isNaN(value1) || isNaN(value2)) {
//     throw new Error(`Invalid price values: Value1=${value1}, Value2=${value2}`);
//   }

//   const expectedSubtotal = value1 + value2;

//   const subtotalLocator = page.locator('[class="summary_subtotal_label"]'); 
//   await expect(subtotalLocator).toBeVisible();

//   const subtotalText = await subtotalLocator.textContent();
//   const subtotalOnPage = parseFloat(subtotalText.match(/[\d.]+/)[0]);

//   console.log(`Calculated Subtotal: ${expectedSubtotal}, Page Subtotal: ${subtotalOnPage}`); 

//   expect(subtotalOnPage).toBeCloseTo(expectedSubtotal, 2);

//   //await page.pause();
// });




//  import { test, expect } from "@playwright/test";


// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// const[newPage]= await Promise.all([
//   page.waitForEvent('popup'),
//   page.locator('fieldset #opentab').click()
// ])
// await newPage.waitForLoadState()
// console.log(await newPage.title());
// await newPage.locator('[class="navbar-nav ml-auto"] li a[href="about.html"]').click()
// await newPage.pause()

// })


//for navigating between pages :
//goback =>to go to previous page
//goforward=> to go to next page


//   import { test, expect } from "@playwright/test";
// import { log } from "console";

// test('validate radio button', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// const keyword="Bugzilla"
// const rows=await page.$$('table tr')
// for(let row of rows){
//   const tds=await tds[1].()
//   if(secondTD.includes(keyword)){
//     const completeCoursename=await tds[2].textcontent()
//     console.log(completeCoursename);
//     const price = await tds[2].textcontent()
//     expect(Number(price).toEqual(25))
//   }
// }
// })


//isVisible
//ishidden
//.hover(used to check options in hover)
//.getbytext(to get address of text)




