import {isPrime} from './index';

describe('isPrime', () => {
  it('should return true if passed 0', () => {
    expect(isPrime(0)).toEqual(true);
  });
});
