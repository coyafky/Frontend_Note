function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  var add5 = makeAdder(5);
  console.log(add5(3)); // 输出 8
  console.log(add5(10)); // 输出 15
  
  
  