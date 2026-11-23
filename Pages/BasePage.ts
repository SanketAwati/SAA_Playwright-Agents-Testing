import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected constructor(protected readonly page: Page) {}

  get pageHeading(): Locator {
    return this.page.locator('.title');
  }

  get cartLink(): Locator {
    return this.page.getByTestId('shopping-cart-link');
  }

  get cartBadge(): Locator {
    return this.page.locator('.shopping_cart_badge');
  }

  async open(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
