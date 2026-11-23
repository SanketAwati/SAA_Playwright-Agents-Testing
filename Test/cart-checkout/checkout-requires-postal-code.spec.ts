import { expect, test } from '../../Fixture/test.fixture';
import { products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Checkout requires a zip or postal code', async ({ authenticatedPageManager: pages }) => {
    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.openCart();
    await pages.cartPage.checkout();
    await expect(pages.checkoutPage.pageHeading).toHaveText('Checkout: Your Information');

    await pages.checkoutPage.firstNameInput.fill('Alex');
    await pages.checkoutPage.lastNameInput.fill('Tester');
    await pages.checkoutPage.continueToOverview();
    await expect(pages.checkoutPage.pageHeading).toHaveText('Checkout: Your Information');
    await expect(pages.checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
  });
});
