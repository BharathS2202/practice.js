// import{test,expect} from "@playwright/test"
// test('Dynamic Dropdown',async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const input=await page.locator("input[id=autocomplete]");
//     const dropdownoptions=await page.locator(".ui-menu-item div");
//     await input.fill("ind");
//     await dropdownoptions.first().waitFor();
//     let options=await dropdownoptions.allTextContents();
//     const coutryToSelect="india";
//     for(let i=0;i<options.length;i++){
//         if(options[i].trim()===coutryToSelect){
//             await dropdownoptions.nth(i).click();
//             break;
//         }
//     }
//     await page.pause();
// });