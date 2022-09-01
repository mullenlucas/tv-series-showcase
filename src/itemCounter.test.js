import itemCounter from './__mocks__/itemCounter.js';
import fetch from "node-fetch";

describe('Test the amount of items displayed', () => {
  test('Array of items to contain 99 tv-series', async () => {
    const baseUrl = 'https://api.tvmaze.com/shows';
    let itemsArray = [];
    const response = await fetch(baseUrl);
    const data = await response.json();
  
    expect(itemCounter(data, itemsArray)).toBe(99);
  });
});