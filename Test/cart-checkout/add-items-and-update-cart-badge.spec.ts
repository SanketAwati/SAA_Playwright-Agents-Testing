import { expect, test } from '../../Fixture/test.fixture';
import { products } from '../../Test data/sauceDemoData';

test.describe('Cart and checkout flows', () => {
  test('Adding products updates the cart badge and cart contents', async ({ authenticatedPageManager: pages }) => {
    await expect(pages.inventoryPage.cartLink).toHaveAccessibleName('Cart, empty');

    await pages.inventoryPage.addToCart(products.backpack);
    await expect(pages.inventoryPage.removeButton(products.backpack)).toBeVisible();
    await expect(pages.inventoryPage.cartBadge).toHaveText('1');

    await pages.inventoryPage.addToCart(products.bikeLight);
    await expect(pages.inventoryPage.removeButton(products.bikeLight)).toBeVisible();
    await expect(pages.inventoryPage.cartBadge).toHaveText('2');

    await pages.inventoryPage.openCart();
    await expect(pages.cartPage.itemNames).toHaveText([
      products.backpack.name,
      products.bikeLight.name,
    ]);
    await expect(pages.cartPage.itemQuantities).toHaveText(['1', '1']);
    await expect(pages.cartPage.cartBadge).toHaveText('2');
  });
});
