import { test, expect } from 'vitest';
import sortDescending from './sortDescending';

test('sort in descending order (already ordered)', () => {
  expect(
    sortDescending(20, 30),
  ).toBe(1);
});

test('sort in descending order (not ordered)', () => {
  expect(
    sortDescending(30, 20),
  ).toBe(-1);
});

test('sort in descending order (same order)', () => {
  expect(
    sortDescending(20, 20),
  ).toBe(0);
});
