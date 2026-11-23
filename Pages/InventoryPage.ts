import { Locator } from '@playwright/test';
import { Product } from '../Test data/sauceDemoData';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  get productsHeading(): Locator {
    return this.pageHeading;
  }

  addButton(product: Product): Locator {
    return this.page.getByTestId(`add-to-cart-${product.testId}`);
  }

  removeButton(product: Product): Locator {
    return this.page.getByTestId(`remove-${product.testId}`);
  }

  async addToCart(product: Product): Promise<void> {
    await this.addButton(product).click();
  }

  async removeFromInventory(product: Product): Promise<void> {
    await this.removeButton(product).click();
  }
}
