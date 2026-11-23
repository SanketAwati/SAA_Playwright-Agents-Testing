import { expect, test } from '../../Fixture/test.fixture';
import { products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Removing products from the cart updates the badge and rows', async ({ authenticatedPageManager: pages }) => {
    await pages.inventoryPage.addToCart(products.backpack);
    await pages.inventoryPage.addToCart(products.bikeLight);
    await pages.inventoryPage.openCart();
    await expect(pages.cartPage.itemNames).toHaveText([
      products.backpack.name,
      products.bikeLight.name,
    ]);
    await expect(pages.cartPage.cartBadge).toHaveText('2');

    await pages.cartPage.removeProduct(products.backpack);
    await expect(pages.cartPage.itemNames).toHaveText([products.bikeLight.name]);
    await expect(pages.cartPage.itemQuantities).toHaveText('1');
    await expect(pages.cartPage.cartBadge).toHaveText('1');

    await pages.cartPage.removeProduct(products.bikeLight);
    await expect(pages.cartPage.itemRows).toHaveCount(0);
    await expect(pages.cartPage.cartLink).toHaveAccessibleName('Cart, empty');
  });
});
