import { Page } from '@playwright/test';
import { CartPage } from './CartPage';
import { CheckoutCompletePage } from './CheckoutCompletePage';
import { CheckoutPage } from './CheckoutPage';
import { InventoryPage } from './InventoryPage';
import { LoginPage } from './LoginPage';

export class PageManager {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;
  readonly cartPage: CartPage;
  readonly checkoutPage: CheckoutPage;
  readonly checkoutCompletePage: CheckoutCompletePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.checkoutCompletePage = new CheckoutCompletePage(page);
  }
}
