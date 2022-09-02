import commentCounter from './__mocks__/commentCounter.js';

describe('test count of comments made on a particular series', () => {
  test('comments array contains two comments', () => {
    const comment = [
      { comment: 'good enough series for a drama', creation_date: '2022-08-31', username: 'Ronaldo' },
      { comment: 'a good series to watch', creation_date: '2022-08-31', username: 'paul' },
      { comment: 'nice series all round', creation_date: '2022-08-31', username: 'messi' },
    ];
    expect(commentCounter(comment)).toBe(3);
  });

  test('comments array contains no comments', () => {
    const comment = [];
    expect(commentCounter(comment)).toBe(0);
  });
});
