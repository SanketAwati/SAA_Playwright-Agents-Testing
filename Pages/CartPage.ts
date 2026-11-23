import { Locator } from '@playwright/test';
import { Product } from '../Test data/sauceDemoData';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  get itemRows(): Locator {
    return this.page.locator('.cart_item');
  }

  get itemNames(): Locator {
    return this.page.locator('.cart_item .inventory_item_name');
  }

  get itemQuantities(): Locator {
    return this.page.locator('.cart_item .cart_quantity');
  }

  removeButton(product: Product): Locator {
    return this.page.getByTestId(`remove-${product.testId}`);
  }

  get checkoutButton(): Locator {
    return this.page.getByTestId('checkout');
  }

  async removeProduct(product: Product): Promise<void> {
    await this.removeButton(product).click();
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
