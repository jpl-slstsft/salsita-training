// See https://www.codewars.com/kata/5680e56f4797a55076000044 for prompt.

const initKeyboard = (): Map<string, string> => {
  const symbsOnKey = new Map<string, string>();
  symbsOnKey.set("1", "");
  symbsOnKey.set("2", "ABC");
  symbsOnKey.set("3", "DEF");
  symbsOnKey.set("4", "GHI");
  symbsOnKey.set("5", "JKL");
  symbsOnKey.set("6", "MNO");
  symbsOnKey.set("7", "PQRS");
  symbsOnKey.set("8", "TUV");
  symbsOnKey.set("9", "WXYZ");
  symbsOnKey.set("*", "");
  symbsOnKey.set("0", " ");
  symbsOnKey.set("#", "");
  const sequence = new Map<string, string>();
  for (const [key, symb] of symbsOnKey.entries()) {
    for (let i = 0; i < symb.length; i++) {
      sequence.set(symb.charAt(i), key.repeat(i+1));
    }
  }
  return sequence;
};

export const getKeystrokes = (input:string): string => {
  const sequence:Map<string, string> = initKeyboard();
  let keystrokes = "";
  for (let i = 0; i < input.length; i++) {
    const currentChar = input.charAt(i);
    const previousChar = input.charAt(i-1);
    if (previousChar.length === 1 && previousChar === currentChar) {
      keystrokes += "p";
    }
    keystrokes += sequence.get(currentChar);
  }
  return keystrokes;
};
