// Create a class that creates a number stack object.
// The stack should behave like a classic LIFO, where the last number you put in
// is the first one you get out
// A stack object should have the following methods on it:
//   - push - put a number onto the stack
//   - pop - remove the most recently pushed number and return it
//   - peek - return the most recently pushed number (does not change the stack)
//   - view -

/**
 * A LIFO stack that can contain numbers
 */
export class NumberStack {
  private list: number[];

  /**
   * Sets up a new NumberStack object.  Is called whenever `new NumberStack()`
   * is called.
   */
  constructor() {
    this.list = [];
  }

  /** Puts a number on the top of the stack */
  public push(input: number): void {
    return;
  }

  /** Remove the most recently pushed number from the stack and return it */
  public pop(): number {
    return 0;
  }

  /**
   * Returns the most recently pushed number in the stack.  Does not modify the
   * contents of the stack itself
   */
  get top(): number {
    return 0;
  }

  /** Returns all the contents of the stack */
  get contents(): number[] {
    return [];
  }
}
