import { test, expect } from 'vitest';
import sortAscending from './sortAscending';

test('sort in ascending order (already ordered)', () => {
  expect(
    sortAscending(20, 30),
  ).toBe(-1);
});

test('sort in ascending order (not ordered)', () => {
  expect(
    sortAscending(30, 20),
  ).toBe(1);
});

test('sort in ascending order (same order)', () => {
  expect(
    sortAscending(20, 20),
  ).toBe(0);
});
