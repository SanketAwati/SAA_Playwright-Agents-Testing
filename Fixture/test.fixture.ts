import { expect, test as base } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';
import { sauceDemoUser } from '../Test data/sauceDemoData';

type FrameworkFixtures = {
  pageManager: PageManager;
  authenticatedPageManager: PageManager;
};

export const test = base.extend<FrameworkFixtures>({
  pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },
  authenticatedPageManager: async ({ pageManager }, use) => {
    await pageManager.loginPage.openLogin();
    await pageManager.loginPage.login(sauceDemoUser);
    await expect(pageManager.inventoryPage.productsHeading).toHaveText('Products');
    await use(pageManager);
  },
});

export { expect };
