import { Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginCredentials } from '../Test data/sauceDemoData';

export class LoginPage extends BasePage {
  get usernameInput(): Locator {
    return this.page.getByPlaceholder('Username');
  }

  get passwordInput(): Locator {
    return this.page.getByPlaceholder('Password');
  }

  get loginButton(): Locator {
    return this.page.getByRole('button', { name: 'Login' });
  }

  async openLogin(): Promise<void> {
    await this.open('/');
  }

  async login(credentials: LoginCredentials): Promise<void> {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }
}
