/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import CardImage from './CardImage';

test('CardImage does not display placeholder img when showBridge prop is passed in', () => {
  render(<CardImage showBridge />);

  expect(
    screen.getByTestId('card-image').children.length,
  ).toBe(0);
});

test('CardImage displays placeholder img when showBridge prop is not passed in', () => {
  render(<CardImage />);

  expect(
    screen.getByTestId('card-image').children.length,
  ).toBeGreaterThan(0);
});
