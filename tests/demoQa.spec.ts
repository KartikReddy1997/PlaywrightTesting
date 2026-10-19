import { test, expect } from '@playwright/test';
import { captureScreenshot } from '../Utils/screenShotHealper';
import { elementsPage } from '../Pages/elementsPage'

test('navigate to DemoQA website', async ({ page }) => {
await page.goto('https://demoqa.com/');
expect(page.url()).toBe('https://demoqa.com/');
});

test('validate Elements link', async ({ page }, testInfo) => {
  const elements = new elementsPage(page);
  await page.goto('/');
  await expect(page).toHaveURL('https://demoqa.com/');

  await page.getByRole('link', { name: 'Elements' }).click();
  await expect(page).toHaveURL('https://demoqa.com/elements');

  await elements.textBox.click();
  await expect(elements.textBox).toBeVisible();

  await elements.fullNameTextBox.fill('Full name');
  await elements.emailTextBox.fill('mail@gmai.com');
  await elements.addressTextBox.fill('Street number,locality,city');
  await elements.permAddressTextBox.fill('ahosfhawy');
  await elements.submitBtn.click();

  await expect(elements.resultName).toContainText('Name:Full name');
  await expect(elements.resultEmail).toContainText('Email:mail@gmai.com');
  await expect(elements.resultAddress).toContainText('Current Address :Street number,locality,city');
  await expect(elements.resultPermAddress).toContainText('Permananet Address :ahosfhawy');

 
  await elements.chechBox.click();
  if(!await elements.homeCheckbox.isChecked())
  {
    await elements.homeCheckbox.click();
    await captureScreenshot(page,testInfo,'checkBox selected');
    }
  await expect(page.locator('#result')).toBeVisible();

  await elements.radioButton.click();
  const radioButton = elements.yesRadioButton;
  
    

  if(!await radioButton.isChecked()){
    await radioButton.check();
    await captureScreenshot(page,testInfo,'radio button selected');
  }




});