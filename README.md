# Playwright Test Framework

## Allure reports

The Playwright configuration writes Allure result files to `Report/allure-results`
and keeps the Playwright HTML report in `Report/html`.

### Generate and open an Allure report

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Install the Playwright browsers if they are not installed yet:

   ```bash
   npx playwright install
   ```

3. Run all tests in all configured browser projects. This clears results from
   the previous run, then creates fresh Allure results and the Playwright HTML
   report:

   ```bash
   npm test
   ```

4. Build the Allure HTML report from the test results:

   ```bash
   npm run allure:generate
   ```

5. Open the generated report in a browser:

   ```bash
   npm run allure:open
   ```

Allure 3 requires Node.js 22.18 or newer. The generated report is written under
`Report/allure-report`; raw results are under `Report/allure-results`. Both
folders are ignored by Git.

The existing Playwright HTML report can be opened separately with:

```bash
npm run report
```
