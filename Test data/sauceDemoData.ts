export interface LoginCredentials {
  username: string;
  password: string;
}

export interface Product {
  name: string;
  testId: string;
  price: string;
}

export interface CheckoutInformation {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export const sauceDemoUser: LoginCredentials = {
  username: process.env.SAUCE_DEMO_USERNAME ?? 'standard_user',
  password: process.env.SAUCE_DEMO_PASSWORD ?? 'secret_sauce',
};

export const checkoutInformation: CheckoutInformation = {
  firstName: 'Alex',
  lastName: 'Tester',
  postalCode: '90210',
};

export const products = {
  backpack: {
    name: 'Sauce Labs Backpack',
    testId: 'sauce-labs-backpack',
    price: '$29.99',
  },
  bikeLight: {
    name: 'Sauce Labs Bike Light',
    testId: 'sauce-labs-bike-light',
    price: '$9.99',
  },
} satisfies Record<string, Product>;

export const taxRate = 0.08;
