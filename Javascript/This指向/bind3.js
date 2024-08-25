
//1.创建偏函数：bind方法还可以用于创建偏函数，即固定函数的一部分参数，以便在后续调用中只传递剩余的参数。


function multiply(a, b) {
    return a * b;
  }
  
  const double = multiply.bind(null, 2);
  console.log(double(5)); // 输出：10