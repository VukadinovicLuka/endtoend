import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.cekos.rs/merne-jedinice-konverzija');
  await page.locator('#naziv-do').selectOption('m');
  await page.getByLabel('Vrednost').click();
  await page.getByLabel('Vrednost').click();
  await page.getByLabel('Vrednost').fill('1');
  await page.getByRole('button', { name: 'Konvertuj' }).click();
  await expect(page.locator('#rezultat')).toContainText('1 km = 1.000,000000 m');
});