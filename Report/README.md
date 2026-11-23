# Test reports

`npm test` clears previous Allure results, runs all configured browser projects,
and writes Allure results to `Report/allure-results`, the Playwright HTML report
to `Report/html`, and run artifacts to `Report/test-results`. Generated output
directories are ignored by Git.

Generate and open the Allure report with:

```bash
npm run allure:generate
npm run allure:open
```

The Playwright HTML report can be opened separately with `npm run report`.
