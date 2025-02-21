// // import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=13072869731589377553&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301601&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1");
// //   await page.locator("input#twotabsearchtextbox").fill("iphone 16 pro max")
// //   await page.locator("input#nav-search-submit-button").click()
// //    await page.locator("button#a-autoid-2-announce").click()
// //    await page.waitForTimeout(2000)
// //    await page.locator("div#nav-cart-text-container").click()
// //    await page.waitForTimeout(2000)
// //   await expect(page.locator(".a-truncate-cut")).toBeVisible();

// // });


// import {test,expect} from '@playwright/test';

// test.only('test',async({page}) => {

//     await page.goto("https://www.amazon.in//")
//     await page.locator("input#twotabsearchtextbox").fill("iphone 16")
//     await page.locator("input#nav-search-submit-button").click()
//     await page.locator("button#a-autoid-1-announce").click()
//     await page.locator("span#nav-cart-count").click()
//     await page.locator("span#desktop-ptc-button-celWidget").click()
// });