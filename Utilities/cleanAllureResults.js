const { rmSync } = require('node:fs');
const { resolve } = require('node:path');

rmSync(resolve(__dirname, '..', 'Report', 'allure-results'), {
  recursive: true,
  force: true,
});
