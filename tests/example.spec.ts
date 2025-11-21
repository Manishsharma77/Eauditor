import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login and create full template", async ({ page }) => {
  const login = new LoginPage(page);

  // Step 1: Login
  await login.navigate();
  await login.enterUsername("  aaaaaaaa");
  await login.enterPassword(" bbbbbb");
  await login.clickLogin();

  // Step 2: Wait for dashboard
  const templatesListLink = page.getByText("Templates List", { exact: true });
  await expect(templatesListLink).toBeVisible({ timeout: 30000 });

  // Step 3: Open Templates List
  await templatesListLink.click();

  // Step 4: Click Create
  const createButton = page.getByRole("button", { name: "Create", exact: true });
  await expect(createButton).toBeVisible({ timeout: 10000 });
  await createButton.click();

  // Step 5: Enter Template Name
  const templateNameInput = page.getByPlaceholder("Enter template name");
  await expect(templateNameInput).toBeVisible({ timeout: 10000 });
  await templateNameInput.fill("test");

  // Step 6: First Submit
  const firstSubmit = page.getByRole("button", { name: "Submit" });
  await expect(firstSubmit).toBeVisible({ timeout: 10000 });
  await firstSubmit.click();

  // ------------------------------
  // ✅ Step 7: Select Template Type
  // ------------------------------
// Step: Enter Template Name
const templateNameField = page.getByPlaceholder("Enter template name");
await expect(templateNameField).toBeVisible({ timeout: 10000 });
await templateNameField.fill("Agriculture");


  // Step 8: Fill Description
  const descriptionField = page.getByPlaceholder("Description");
  await expect(descriptionField).toBeVisible({ timeout: 10000 });
  await descriptionField.fill("Description");

  // Step 9: Select "Make it Private Template"
  const privateOption = page.getByText("Make it Private Template", { exact: true });
  await expect(privateOption).toBeVisible({ timeout: 10000 });
  await privateOption.click();

  // Step 10: Final Submit
  const finalSubmit = page.getByRole("button", { name: "Submit" });
  await expect(finalSubmit).toBeVisible({ timeout: 10000 });
  await finalSubmit.click();
});
