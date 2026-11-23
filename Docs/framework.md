# Sauce Demo Playwright POM

## Structure

- `Pages/` contains page objects. Each page object extends `BasePage`.
- `Pages/PageManager.ts` constructs and exposes the page objects for the current browser page.
- `Fixture/` provides `pageManager` and `authenticatedPageManager`; the authenticated fixture logs in and verifies the Products page before each test.
- `Test/` contains the Sauce Demo browser tests.
- `Test data/` contains the demo login, checkout data, and product catalog.
- `Utilities/` contains shared test helpers such as integer-cent currency conversion.
- `Report/` receives the HTML report and test artifacts.
- `Docs/` contains framework documentation.

## Running tests

```powershell
npm run test:cart
npm run test:chromium
npm run report
```

Set `SAUCE_DEMO_BASE_URL`, `SAUCE_DEMO_USERNAME`, or `SAUCE_DEMO_PASSWORD` to override the default Sauce Demo values.

## Adding a test

Import `test` and `expect` from `Fixture/test.fixture.ts`, request the
`authenticatedPageManager` fixture, and use its page objects for browser
actions and locators. Add UI selectors and page behavior to the relevant page
object rather than duplicating them in tests. Store reusable scenario values
in `Test data/sauceDemoData.ts`.
