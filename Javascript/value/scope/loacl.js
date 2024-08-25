function myFunction() {
    let localVar = "I'm a local variable";
    console.log(localVar); // 可以在函数内部访问局部变量
  }
  
  myFunction();
  console.log(localVar); // 无法在函数外部访问局部变量，会导致 ReferenceError