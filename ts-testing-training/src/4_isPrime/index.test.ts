import {isPrime} from '.';

describe('isPrime', () => {
  it('should return false if passed 0', () => {
    expect(isPrime(0)).toEqual(false);
  });
  it('should return false if passed 1', () => {
    expect(isPrime(1)).toEqual(false);
  });
  it('should return false if passed 2', () => {
    expect(isPrime(2)).toEqual(true);
  });
  it('should return false if passed 3', () => {
    expect(isPrime(3)).toEqual(true);
  });
  it('should return false if passed -1', () => {
    expect(isPrime(-1)).toEqual(false);
  });
  it('should return true if passed the largest prime that can be stored in an unsigned 8-bit integer (251)', () => {
    expect(isPrime(251)).toEqual(true);
  });
  it('should return true if passed the largest prime that can be stored in an unsigned 16-bit integer (65521)', () => {
    expect(isPrime(65521)).toEqual(true);
  });
  it('should return true if passed the largest prime that can be stored in an signed 32-bit integer (2147483647)', () => {
    expect(isPrime(2147483647)).toEqual(true);
  });
});
