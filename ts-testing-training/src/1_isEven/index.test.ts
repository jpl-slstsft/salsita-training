import {isEven} from './index';

describe('isEven', () => {
  it('should return true if passed 0', () => {
    expect(isEven(0)).toEqual(true);
  });
});
