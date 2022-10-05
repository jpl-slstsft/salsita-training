import {NumberStack} from '.';

describe('Stack', () => {
  it('should be empty when instantiated', () => {
    const aNumberStack = new NumberStack();
    expect(aNumberStack.contents).toEqual([]);
  });
  describe('push', () => {
    let aNumberStack:NumberStack;
    beforeEach(() => {
      aNumberStack = new NumberStack();
    });
    it('should make the content of the stack [1] when the stack is instantiated then 1 is pushed', () => {
      aNumberStack.push(1);
      expect(aNumberStack.contents).toEqual([1]);
    });
    it('should make the content of the stack [1, 2] when the stack is instantiated then 1 then 2 are pushed', () => {
      aNumberStack.push(1);
      aNumberStack.push(2);
      expect(aNumberStack.contents).toEqual([1, 2]);
    });
  });
  describe('top', () => {
    it('should return undefined when the stack is instantiated', () => {
      const aNumberStack = new NumberStack();
      expect(aNumberStack.top).toBeUndefined();
    });
    it('should return 1 when the stack is instantiated and 1 is pushed', () => {
      const aNumberStack = new NumberStack();
      aNumberStack.push(1);
      expect(aNumberStack.top).toEqual(1);
    });
    it('should return 2 when the stack is instantiated and 1 then 2 are pushed', () => {
      const aNumberStack = new NumberStack();
      aNumberStack.push(1);
      aNumberStack.push(2);
      expect(aNumberStack.top).toEqual(2);
    });
  });
  describe('pop', () => {
    it('should throw "empty stack" when the stack is empty', () => {
      const aNumberStack = new NumberStack();
      const t = () => {
        aNumberStack.pop();
      };
      expect(t).toThrow('EmptyStack');
    });
    describe('when the stack contains [1]', () => {
      let aNumberStack:NumberStack;
      beforeEach(() => {
        aNumberStack = new NumberStack();
        aNumberStack.push(1);
      });
      it('should return 1', () => {
        expect(aNumberStack.pop()).toEqual(1);
      });
      it('should make the stack empty', () => {
        aNumberStack.pop();
        expect(aNumberStack.contents.length).toEqual(0);
      });
      it('should make the stack [1] if 2 has also been pushed', () => {
        aNumberStack.push(2);
        aNumberStack.pop();
        expect(aNumberStack.contents).toEqual([1]);
      });
    });
  });
});
