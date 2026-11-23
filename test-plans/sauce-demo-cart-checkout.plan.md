# Sauce Demo Cart and Checkout Test Plan

## Application Overview

Test the Sauce Demo shopping cart and checkout journey using the existing seed test tests/seed.spec.ts. Cover product add/remove behavior, cart badge synchronization, required checkout fields, order-summary totals, successful order completion, and empty-cart state. Start each scenario from a fresh seed state with a logged-in user on the Products page and an empty cart; use independent tests and seed each scenario through UI actions.

## Test Scenarios

### 1. Cart and checkout flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Adding products updates the cart badge and cart contents

**File:** `tests/cart-checkout/add-items-and-update-cart-badge.spec.ts`

**Steps:**
  1. Start from the fresh seed state on the Products page with an empty cart.
    - expect: The cart badge is not displayed or indicates zero items.
  2. Click Add to cart for Sauce Labs Backpack.
    - expect: The button changes to Remove.
    - expect: The cart badge displays 1.
  3. Click Add to cart for Sauce Labs Bike Light.
    - expect: The button changes to Remove.
    - expect: The cart badge displays 2.
  4. Open the cart.
    - expect: Sauce Labs Backpack and Sauce Labs Bike Light are listed, each with quantity 1.
    - expect: The cart badge displays 2.

#### 1.2. Removing a product from the Products page clears its cart state

**File:** `tests/cart-checkout/remove-item-from-products.spec.ts`

**Steps:**
  1. Start from the fresh seed state on the Products page with an empty cart.
    - expect: The Products page is displayed with no products selected.
  2. Click Add to cart for Sauce Labs Backpack, then click its Remove button.
    - expect: The backpack button returns to Add to cart.
    - expect: The cart badge is cleared or displays 0.
  3. Open the cart.
    - expect: The cart contains no product rows.

#### 1.3. Removing products from the cart updates the badge and rows

**File:** `tests/cart-checkout/remove-items-from-cart.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add Sauce Labs Backpack and Sauce Labs Bike Light, and open the cart.
    - expect: Both products appear in the cart and the badge displays 2.
  2. Click Remove for Sauce Labs Backpack.
    - expect: The backpack row disappears.
    - expect: Sauce Labs Bike Light remains with quantity 1.
    - expect: The cart badge updates to 1.
  3. Click Remove for Sauce Labs Bike Light.
    - expect: The cart has no product rows.
    - expect: The cart badge is cleared or displays 0.

#### 1.4. Checkout requires a first name

**File:** `tests/cart-checkout/checkout-requires-first-name.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add one product, open the cart, and select Checkout.
    - expect: The Checkout: Your Information form is displayed with First Name, Last Name, and Zip/Postal Code fields.
  2. Leave all fields blank and click Continue.
    - expect: The user stays on the information step.
    - expect: An error indicates that First Name is required.

#### 1.5. Checkout requires a last name

**File:** `tests/cart-checkout/checkout-requires-last-name.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add one product, open the cart, and select Checkout.
    - expect: The Checkout: Your Information form is displayed.
  2. Enter a first name, leave Last Name and Zip/Postal Code blank, and click Continue.
    - expect: The user stays on the information step.
    - expect: An error indicates that Last Name is required.

#### 1.6. Checkout requires a zip or postal code

**File:** `tests/cart-checkout/checkout-requires-postal-code.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add one product, open the cart, and select Checkout.
    - expect: The Checkout: Your Information form is displayed.
  2. Enter a first name and last name, leave Zip/Postal Code blank, and click Continue.
    - expect: The user stays on the information step.
    - expect: An error indicates that Zip/Postal Code is required.

#### 1.7. Completing an order verifies the summary and confirmation

**File:** `tests/cart-checkout/complete-order-and-verify-summary.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add Sauce Labs Backpack and Sauce Labs Bike Light, open the cart, and select Checkout.
    - expect: Both products are present in the cart.
  2. Enter valid First Name, Last Name, and Zip/Postal Code values, then click Continue.
    - expect: The Checkout: Overview page displays both selected products with the correct prices.
    - expect: Item total is $39.98, tax is $3.20, and total is $43.18.
    - expect: Payment and shipping information are displayed.
  3. Click Finish.
    - expect: The Checkout: Complete! page displays Thank you for your order! and the dispatch confirmation message.
    - expect: The cart badge is empty.

#### 1.8. Completed checkout leaves the cart empty

**File:** `tests/cart-checkout/cart-remains-empty-after-order.spec.ts`

**Steps:**
  1. Start from the fresh seed state, add one product, and complete checkout with valid customer information.
    - expect: The order-completion confirmation is displayed.
  2. Open the cart after completing the order.
    - expect: The cart is empty and the cart badge is cleared or displays 0.
