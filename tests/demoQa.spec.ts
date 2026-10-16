import { test, expect } from '@playwright/test';

test('navigate to DemoQA website', async ({ page }) => {
await page.goto('https://demoqa.com/');
expect(page.url()).toBe('https://demoqa.com/');
});

test('validate Elements link', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveURL('https://demoqa.com/');

  await page.getByRole('link', { name: 'Elements' }).click();
  await expect(page).toHaveURL('https://demoqa.com/elements');

  await page.getByRole('link', { name: 'Text Box' }).click();
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Full Name' }).fill('Full name');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('mail@gmai.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Street number,locality,city');
  await page.locator('#permanentAddress').fill('ahosfhawy');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#name')).toContainText('Name:Full name');
  await expect(page.locator('#email')).toContainText('Email:mail@gmai.com');
  await expect(page.locator('#output')).toContainText('Current Address :Street number,locality,city');
  await expect(page.locator('#output')).toContainText('Permananet Address :ahosfhawy');

  await page.getByRole('link', { name: 'Check Box' }).click();
  await page.getByRole('checkbox', { name: 'Home' }).click();
  await expect(page.locator('#result')).toBeVisible();
});