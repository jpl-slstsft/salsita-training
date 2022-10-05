// See https://www.codewars.com/kata/56b7f2f3f18876033f000307 for prompt.

export const isAscending = (arr:number[]): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Edge cases if we would put arr.length instead of arr.length-1:
      //  + No need for a specific case when there is only one number, because:
      //     ( 1 > undefined )→ false ( also ( 1 < undefined )→ false ).
      return false;
    }
  }
  return true;
};
