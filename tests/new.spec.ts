import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login and create full template", async ({ page }) => {
  const login = new LoginPage(page);

  // Step 1: Login
  await login.navigate();
  await login.enterUsername("Fr");
  await login.enterPassword("   ");
  await login.clickLogin();

  // Step 2: Wait for dashboard
  await expect(page.getByText("Templates List")).toBeVisible({ timeout: 10000 });

  // Step 3: Open Templates List
  await page.getByText("Templates List").click();

  // Step 4: Click Create
  const createButton = page.getByRole("button", { name: "New  Template From Library", exact: true });
  await expect(createButton).toBeVisible();
  await createButton.click();}