import {wordLengthFilter} from '.';

describe('wordLengthFilter', () => {
  it("should return ['quick', 'brown', 'jumps'] With input 'The quick brown fox jumps over the lazy dog', 4", () => {
    expect(wordLengthFilter('The quick brown fox jumps over the lazy dog', 4)).toEqual(['quick', 'brown', 'jumps']);
  });
});
