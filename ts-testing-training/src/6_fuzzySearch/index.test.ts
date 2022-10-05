import {fuzzySearch} from '.';

describe('fuzzySearch', () => {
  it("should return the words 'apple' when called with 'a' and this word", () => {
    expect(fuzzySearch('a', ['apple'])).toEqual(['apple']);
  });
  it("should return the words 'apple' when called with 'ap' and this word", () => {
    expect(fuzzySearch('ap', ['apple'])).toEqual(['apple']);
  });
  it("should return the words 'apple' and 'grape' when called with 'a' and these words", () => {
    expect(fuzzySearch('a', ['apple', 'grape'])).toEqual(['apple', 'grape']);
  });
  it("should return the words 'apple' and 'grape' when called with 'ap' and these words", () => {
    expect(fuzzySearch('ap', ['apple', 'grape'])).toEqual(['apple', 'grape']);
  });
  it("should return the word 'apple' when called with 'al' and the words 'apple' and 'grape'", () => {
    expect(fuzzySearch('al', ['apple', 'grape'])).toEqual(['apple']);
  });
  it("should return nothing when called with '' and the words 'apple' and 'grape'", () => {
    expect(fuzzySearch('', ['apple', 'grape'])).toEqual([]);
  });
  it("should return the word 'apple' 2 times when called with 'ae' and the word 'apple' 2 times", () => {
    expect(fuzzySearch('ae', ['apple', 'apple'])).toEqual(['apple', 'apple']);
  });
  it("should return nothing when called with 'az' and the word 'apple' 2 times", () => {
    expect(fuzzySearch('az', ['apple', 'apple'])).toEqual([]);
  });
  it("should return nothing when called with 'z' and the word 'orange'", () => {
    expect(fuzzySearch('z', ['orange'])).toEqual([]);
  });
  it("should return nothing when called with 'ez' and the word 'orange'", () => {
    expect(fuzzySearch('ez', ['orange'])).toEqual([]);
  });
});
