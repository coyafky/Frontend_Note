function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    let a = 1; // 第一个月的兔子数
    let b = 1; // 第二个月的兔子数
    let sum = 0; // 当前月的兔子数
  
    for (let i = 2; i < n; i++) {
      sum = a + b;
      a = b;
      b = sum;
    }
  
    return b;
  }
  
  function printRabbitCount(months) {
    for (let i = 1; i <= months; i++) {
      console.log(`第 ${i} 个月的兔子总数为: ${fibonacci(i)}`);
    }
  }
  
  // 假设我们想知道前12个月的兔子总数
  printRabbitCount(12);