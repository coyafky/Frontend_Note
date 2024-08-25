class Stack<T> {
    private items: T[] = [];
  
    push(item: T) {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  const poppedNumber = numberStack.pop(); // poppedNumber = 10
  
  const stringStack = new Stack<string>();
  stringStack.push("Hello");
  stringStack.push("World");
  const poppedString = stringStack.pop(); // poppedString = "World"