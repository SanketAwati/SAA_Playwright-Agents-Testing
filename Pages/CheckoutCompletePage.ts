import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  get confirmationHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  get dispatchMessage(): Locator {
    return this.page.getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
    );
  }
}
