import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rapidtables.com/convert/number/binary-to-octal.html');
  await page.locator('#m2_bot_captcha').getByText('×').click();
  await page.getByLabel('Enter binary number').click();
  await page.getByLabel('Enter binary number').fill('1000101');
  await page.getByRole('button', { name: '= Convert' }).click();
  await expect(page.getByLabel('Octal number')).toHaveValue('105');
});