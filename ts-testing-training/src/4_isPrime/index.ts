// Make a function
//  that takes a number
//  and returns true if it's prime, and false if it's not.
//  It should return false for 0.

export const isPrime = (input: number): boolean => {
  if (input < 0) {
    return false;
  }
  if ([0, 1].includes(input)) {
    return false;
  }
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
};
