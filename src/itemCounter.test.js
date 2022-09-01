import fetch from 'node-fetch';
import itemCounter from './__mocks__/itemCounter.js';

describe('Test the amount of items displayed', () => {
  test('Array of items to contain 99 tv-series', async () => {
    const baseUrl = 'https://api.tvmaze.com/shows';
    const itemsArray = [];
    const response = await fetch(baseUrl);
    const data = await response.json();

    expect(itemCounter(data, itemsArray)).toBe(99);
  });
});