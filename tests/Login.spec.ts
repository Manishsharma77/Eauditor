// tests/Login.spec.ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login and verify dashboard sidebar", async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigate();
  await login.enterUsername("Fr@eauditor.app");
  await login.enterPassword("Qms@909@");
  await login.clickLogin();

  // Sidebar navigation items
 
  await expect(page.getByText("Templates List")).toBeVisible();
  await expect(page.getByText("Report")).toBeVisible();
  
});