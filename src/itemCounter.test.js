import itemCounter from './__mocks__/itemCounter.js';

describe('Test the amount of items displayed', () => {
  test('Array of items to contain tv-series', async () => {
    const itemsArray = [
      { name: 'Breaking Bad', genres: ['Drama', 'Crime', 'Thriller'], id: 104 },
      { name: 'Better Call Saul', genres: ['Drama', 'Crime', 'Legal'], id: 128 },
      { name: 'Suits', genres: ['Drama', 'Legal'], id: 42 },
      { name: 'Game of Thrones', genres: ['Drama', 'Adventure', 'Fantasy'], id: 39 },
    ];
    expect(itemCounter(itemsArray)).toBe(4);
  });
  test('Empty array of items', async () => {
    const itemsArray = [
    ];
    expect(itemCounter(itemsArray)).toBe(0);
  });
});