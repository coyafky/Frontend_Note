function createCounter() {
    var count = 0;
    return function() {
      var result = count;
      count++;
      return result;
    };
  }
  var counter1 = createCounter();
  console.log(counter1()); // 输出 0
  console.log(counter1()); // 输出 1
  var counter2 = createCounter();
  console.log(counter2()); // 输出 0
  
  
  