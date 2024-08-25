
// 调用函数也是同步的在这里 makeGreeting() 就是一个同步函数，因为在函数返回之前，调用者必须等待函数完成其工
function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }
  const name = "Miriam";
  const greeting = makeGreeting(name);
  console.log(greeting);
  // "Hello, my name is Miriam!"
  