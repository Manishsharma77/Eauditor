// tests/example.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TemplatePage } from "../pages/templatePage";

test("Login and create full template", async ({ page }) => {

  const login = new LoginPage(page);
  const template = new TemplatePage(page);

  // Step 1: Login
  await login.navigate();
  await login.enterUsername("F  ");
  await login.enterPassword("Q   ");
  await login.clickLogin();

  // Step 2: Open Templates list
  await template.openTemplatesList();

  // Step 3: Click Create
  await template.clickCreate();

  // Step 4: Enter Template Name
  await template.enterTemplateName("test");

  // Step 5: Select Template Type ("Agriculture")
  await template.selectTemplateType("Agriculture");

  // Step 6: Fill Description
  await template.fillDescription("This template is designed to streamline documentation and reporting for agricultural operations, audits, and inspections. It includes structured fields for crop types, farming practices, equipment usage, pesticide records, irrigation methods, and compliance with environmental standards. Ideal for agronomists, farm managers, and regulatory teams, the template ensures consistent data capture across seasonal cycles and supports traceability for sustainable farming initiatives.");

  // Step 7: Select Private Template
  await template.choosePrivateTemplate();

  // Step 8: Submit form
  await template.finalSubmitForm();
});
