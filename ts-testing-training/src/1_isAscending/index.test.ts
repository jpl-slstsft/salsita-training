import {isAscending} from ".";

describe('isAscending', () => {
  it('should return true if passed numbers in ascending order', () => {
    expect(isAscending([1, 2, 4, 7, 19])).toEqual(true);
  });
  it('should return true if passed numbers in ascending order that follow one another', () => {
    expect(isAscending([1, 2, 3, 4, 5])).toEqual(true);
  });
  it('should return false if passed numbers like: one ascending series, then another ascending one but starting lower', () => {
    expect(isAscending([1, 6, 10, 18, 2, 4, 20])).toEqual(false);
  });
  it('should return false if passed numbers in descending order that follow one another', () => {
    expect(isAscending([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual(false);
  });
  it('should return true if passed no numbers', () => {
    expect(isAscending([])).toEqual(true);
  });
  it('should return true if passed only one number', () => {
    expect(isAscending([1])).toEqual(true);
  });
  it('should return false if passed numbers like: 1 2 3 2', () => {
    expect(isAscending([1, 2, 3, 2])).toEqual(false);
  });
});
