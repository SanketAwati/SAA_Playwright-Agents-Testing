import { Locator } from '@playwright/test';
import { CheckoutInformation } from '../Test data/sauceDemoData';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  get firstNameInput(): Locator {
    return this.page.getByTestId('firstName');
  }

  get lastNameInput(): Locator {
    return this.page.getByTestId('lastName');
  }

  get postalCodeInput(): Locator {
    return this.page.getByTestId('postalCode');
  }

  get continueButton(): Locator {
    return this.page.getByTestId('continue');
  }

  get errorMessage(): Locator {
    return this.page.getByRole('alert');
  }

  get overviewItemNames(): Locator {
    return this.page.locator('.cart_item .inventory_item_name');
  }

  get overviewItemPrices(): Locator {
    return this.page.locator('.cart_item .inventory_item_price');
  }

  get finishButton(): Locator {
    return this.page.getByTestId('finish');
  }

  summaryText(text: string): Locator {
    return this.page.getByText(text, { exact: true });
  }

  async fillInformation(information: CheckoutInformation): Promise<void> {
    await this.firstNameInput.fill(information.firstName);
    await this.lastNameInput.fill(information.lastName);
    await this.postalCodeInput.fill(information.postalCode);
  }

  async continueToOverview(): Promise<void> {
    await this.continueButton.click();
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }
}
