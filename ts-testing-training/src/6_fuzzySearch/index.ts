// Write a function that takes a search term and a array of strings.
//  The function should return all the elements in the array
//  that fuzzy match the search term.
// A string fuzzy matches the search term
//  if it contains the same letters as the search term in the same order,
//  even if there are gaps between the letters.
// For example:
// - fuzzySearch('a', ['apple', 'grape'])  // returns ['apple', 'grape']
//   - because 'a' is in 'apple' and 'grape';
// - fuzzySearch('ap', ['apple', 'grape'])  // returns ['apple', 'grape']
//   - because 'ap' is both 'apple' and 'grape';
// - fuzzySearch('al', ['apple', 'grape'])  // returns ['apple']
//   - because only 'apple' contains the letters 'a' and 'l' in that order,
//      even though there are gaps.

export const fuzzySearch = (q:string, str:string[]): string[] => {
  const matches:string[] = [];
  str.forEach((s:string) => {
    let isMatch:boolean|undefined = undefined;
    let pos:number = -1;
    [...q].every((qc:string) => {
      if ((pos = s.indexOf(qc, pos+1)) === -1) { // JS walrus "operator"
        isMatch = false;
        return false; // break
      }
      isMatch = true;
      return true; // continue (explicit)
    });
    if (isMatch) {
      matches.push(s);
    }
  });
  return matches;
};
