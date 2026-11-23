import { expect, test } from '../../Fixture/test.fixture';
import { checkoutInformation, products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Completed checkout leaves the cart empty', async ({ authenticatedPageManager: pages }) => {
    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.openCart();
    await pages.cartPage.checkout();
    await pages.checkoutPage.fillInformation(checkoutInformation);
    await pages.checkoutPage.continueToOverview();
    await pages.checkoutPage.finishOrder();
    await expect(pages.checkoutCompletePage.confirmationHeading).toBeVisible();
    await expect(pages.checkoutCompletePage.cartLink).toHaveAccessibleName('Cart, empty');

    await pages.checkoutCompletePage.openCart();
    await expect(pages.cartPage.itemRows).toHaveCount(0);
    await expect(pages.cartPage.cartLink).toHaveAccessibleName('Cart, empty');
  });
});
