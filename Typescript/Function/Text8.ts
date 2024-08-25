function greet(greeting?: string, name: string): void {
    if (greeting) {
      console.log(`${greeting}, ${name}!`);
    } else {
      console.log(`Hello, ${name}!`);
    }
  }
  
  // 调用函数
  greet("Alice"); // 编译错误: 缺少参数 'name'
  greet("Hi", "Bob"); // 正确调用