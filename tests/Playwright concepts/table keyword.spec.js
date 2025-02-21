
//  import { test, expect } from "@playwright/test";
// test("Navigate page", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const keywords="Bugzilla";
//     const rows=await page.$$("table tr")
//     for(let row of rows){
//         const tds=await row.$$("td");
//         if(tds.length>2){
//             const secondData=await tds[1].innerText();//tds[1]meas second data in array 1 means 2 beacuse it starts with 0
//             if(secondData.includes(keywords)){
//                 const completecoursename=await tds[1].textContent();
//                 console.log(completecoursename);
//                 const prize=await tds[2].textContent();
//                 expect(Number(prize)).toEqual(25)

//             }
//         }
//     }

//})