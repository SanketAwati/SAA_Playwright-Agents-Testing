import { expect, test } from '../../Fixture/test.fixture';
import { products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Removing a product from the Products page clears its cart state', async ({ authenticatedPageManager: pages }) => {
    await expect(pages.inventoryPage.productsHeading).toHaveText('Products');
    await expect(pages.inventoryPage.cartLink).toHaveAccessibleName('Cart, empty');

    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.removeFromInventory(products.backpack);
    await expect(pages.inventoryPage.addButton(products.backpack)).toBeVisible();
    await expect(pages.inventoryPage.cartLink).toHaveAccessibleName('Cart, empty');

    await pages.inventoryPage.openCart();
    await expect(pages.cartPage.itemRows).toHaveCount(0);
  });
});
