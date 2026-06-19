import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const rootDir = path.resolve(__dirname, '..');
const fileURL = (fileName: string) => pathToFileURL(path.join(rootDir, fileName)).href;

test('main navigation should route between pages', async ({ page }) => {
  await page.goto(fileURL('index.html'));
  await expect(page).toHaveTitle(/Stitch Gold/);

  await page.click('a[aria-label="Portföy"]');
  await expect(page).toHaveURL(/portfolio_summary\/code.html$/);

  await page.click('a[aria-label="Piyasalar"]');
  await expect(page).toHaveURL(/price_alerts\/code.html$/);

  await page.click('a[aria-label="Profil"]');
  await expect(page).toHaveURL(/gold_dashboard\/code.html$/);
});

test('transaction form validation displays errors and saves values', async ({ page }) => {
  await page.goto(fileURL('i_lem_ekle_t_rk_e/code.html'));
  await page.click('button[type="submit"]');

  await expect(page.locator('#amountError')).toHaveText(/boş bırakılamaz/);
  await expect(page.locator('#priceError')).toHaveText(/boş bırakılamaz/);

  await page.fill('input[name="goldAmount"]', '5');
  await page.fill('input[name="goldPrice"]', '1500');
  await page.selectOption('select[name="goldType"]', 'gram');
  await page.click('button[type="submit"]');

  await expect(page.locator('#formFeedback')).toHaveText(/İşleminiz kaydedildi/);
});

test('price alert toggles persist across reloads', async ({ page }) => {
  await page.goto(fileURL('price_alerts/code.html'));
  const highAlert = page.locator('#alert-up-price');

  await expect(highAlert).toBeChecked();
  await highAlert.click();
  await expect(highAlert).not.toBeChecked();
  await page.reload();
  await expect(highAlert).not.toBeChecked();
});
