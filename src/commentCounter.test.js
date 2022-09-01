import commentCounter from './__mocks__/commentCounter.js';

describe('test count of comments made on a particular series', () => {
  test('comments array contains two comments', () => {
    const comment = ['comment1', 'comment2'];
    expect(commentCounter(comment)).toBe(2);
  });

  test('comments array contains no comments', () => {
    const comment = [];
    expect(commentCounter(comment)).toBe(0);
  });
});
