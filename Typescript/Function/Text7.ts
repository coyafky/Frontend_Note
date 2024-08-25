function greet(name: string, greeting?: string): void {
    if (greeting) {
      console.log(`${greeting}, ${name}!`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  // 调用函数
  greet("Alice"); // 输出: Hello, Alice!
  greet("Bob", "Hi"); // 输出: Hi, Bob!