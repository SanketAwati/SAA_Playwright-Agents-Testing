import { expect, test } from '../../Fixture/test.fixture';
import { products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Checkout requires a first name', async ({ authenticatedPageManager: pages }) => {
    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.openCart();
    await pages.cartPage.checkout();
    await expect(pages.checkoutPage.pageHeading).toHaveText('Checkout: Your Information');
    await expect(pages.checkoutPage.firstNameInput).toBeVisible();
    await expect(pages.checkoutPage.lastNameInput).toBeVisible();
    await expect(pages.checkoutPage.postalCodeInput).toBeVisible();

    await pages.checkoutPage.continueToOverview();
    await expect(pages.checkoutPage.pageHeading).toHaveText('Checkout: Your Information');
    await expect(pages.checkoutPage.errorMessage).toHaveText('Error: First Name is required');
  });
});
