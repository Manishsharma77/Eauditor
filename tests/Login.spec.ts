// tests/Login.spec.ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login and verify dashboard sidebar", async ({ page }) => {
  const login = new LoginPage(page);

  // Step 1: Navigate and login
  await login.navigate();
  await login.enterUsername("aaaaaaaa");
  await login.enterPassword("bbbbbbb");
  await login.clickLogin();

  // Step 2: Confirm login success
  await expect(page).toHaveURL(/dashboard/, { timeout: 20000 });

  // Step 3: Wait for sidebar to render
  
  // Step 4: Verify sidebar items using flexible text match
  const templatesList = page.getByText(/Templates List/i);
  await expect(templatesList).toBeVisible({ timeout: 15000 });

  const reportLink = page.getByText(/Report/i);
  await expect(reportLink).toBeVisible({ timeout: 15000 });
});