import { expect, test } from '../../Fixture/test.fixture';
import { checkoutInformation, products, taxRate } from '../../Test data/sauceDemoData';
import { centsToCurrency, currencyToCents } from '../../Utilities/currency';

test.describe('Cart and checkout flows', () => {
  test('Completing an order verifies the summary and confirmation', async ({ authenticatedPageManager: pages }) => {
    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.addToCart(products.bikeLight);
    await pages.inventoryPage.openCart();
    await expect(pages.cartPage.itemNames).toHaveText([
      products.backpack.name,
      products.bikeLight.name,
    ]);
    await pages.cartPage.checkout();

    await pages.checkoutPage.fillInformation(checkoutInformation);
    await pages.checkoutPage.continueToOverview();
    await expect(pages.checkoutPage.pageHeading).toHaveText('Checkout: Overview');
    await expect(pages.checkoutPage.overviewItemNames).toHaveText([
      products.backpack.name,
      products.bikeLight.name,
    ]);
    await expect(pages.checkoutPage.overviewItemPrices).toHaveText([
      products.backpack.price,
      products.bikeLight.price,
    ]);

    const itemTotalCents = currencyToCents(products.backpack.price) + currencyToCents(products.bikeLight.price);
    const taxCents = Math.round(itemTotalCents * taxRate);
    await expect(pages.checkoutPage.summaryText('Payment Information:')).toBeVisible();
    await expect(pages.checkoutPage.summaryText('SauceCard #31337')).toBeVisible();
    await expect(pages.checkoutPage.summaryText('Shipping Information:')).toBeVisible();
    await expect(pages.checkoutPage.summaryText('Free Pony Express Delivery!')).toBeVisible();
    await expect(pages.checkoutPage.summaryText(`Item total: ${centsToCurrency(itemTotalCents)}`)).toBeVisible();
    await expect(pages.checkoutPage.summaryText(`Tax: ${centsToCurrency(taxCents)}`)).toBeVisible();
    await expect(pages.checkoutPage.summaryText(`Total: ${centsToCurrency(itemTotalCents + taxCents)}`)).toBeVisible();

    await pages.checkoutPage.finishOrder();
    await expect(pages.checkoutCompletePage.pageHeading).toHaveText('Checkout: Complete!');
    await expect(pages.checkoutCompletePage.confirmationHeading).toBeVisible();
    await expect(pages.checkoutCompletePage.dispatchMessage).toBeVisible();
    await expect(pages.checkoutCompletePage.cartLink).toHaveAccessibleName('Cart, empty');
  });
});
