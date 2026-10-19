import { Page , TestInfo} from "@playwright/test";

// method used to capture screenshot and attach it to the report 
//call this method at which steep you need the screenshot
export async function captureScreenshot(
    page : Page,
    testInfo : TestInfo,
    stepName : string
){
await testInfo.attach(stepName, {
        body: await page.screenshot(),
        contentType: 'image/png'
    });

}