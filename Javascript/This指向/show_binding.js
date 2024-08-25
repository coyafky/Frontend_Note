function foo() {
    console.log(this.a);  // 输出 1
    bar.apply({a: 2}, arguments);
  }
  
  function bar(b) {
    console.log(this.a + b);  // 输出 5
  }
  
  var a = 1;
  foo(3);