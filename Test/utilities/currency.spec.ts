import { expect, test } from '@playwright/test';
import { centsToCurrency, currencyToCents } from '../../Utilities/currency';

test.describe('Currency utilities', () => {
  test('converts displayed currency to cents without floating-point rounding', () => {
    expect(currencyToCents('$29.99') + currencyToCents('$9.99')).toBe(3998);
    expect(centsToCurrency(3998)).toBe('$39.98');
  });

  test('rejects malformed currency values', () => {
    expect(() => currencyToCents('29.99')).toThrow('Invalid currency value');
  });
});
