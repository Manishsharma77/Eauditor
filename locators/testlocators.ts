// pages/testlocators.ts
import { Page, Locator } from "@playwright/test";

export class TemplateLocators {
  readonly page: Page;

  readonly templatesList;
  readonly createButton;
  readonly templateNameInput;
  readonly submitButton;
  readonly templateTypeDropdown;
  readonly descriptionField;
  readonly privateTemplateOption;
  readonly finalSubmit;

  constructor(page: Page) {
    this.page = page;

    this.templatesList = page.getByText("Templates List");
    this.createButton = page.getByRole("button", { name: "Create", exact: true });
    this.templateNameInput = page.getByPlaceholder("Enter template name");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.templateTypeDropdown = page.getByText("Select Template Type");
    this.descriptionField = page.getByPlaceholder("Description");
    this.privateTemplateOption = page.getByText("Make it Private Template", { exact: true });
    this.finalSubmit = page.getByRole("button", { name: "Submit" });
  }
}
