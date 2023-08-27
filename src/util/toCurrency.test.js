import { test, expect } from 'vitest';
import toCurrency from './toCurrency';

test('converts integer to USD', () => {
  expect(
    toCurrency(1000),
  ).toBe('$1,000.00');
});

test('converts integer to USD with cents', () => {
  expect(
    toCurrency(12000.65),
  ).toBe('$12,000.65');
});
