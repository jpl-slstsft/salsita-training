import {isEven} from ".";

describe('isEven', () => {
  it('should return true if passed 0', () => {
    expect(isEven(0)).toEqual(true);
  });
  it('should return false if passed 3', () => {
    expect(isEven(3)).toEqual(false);
  });
});
