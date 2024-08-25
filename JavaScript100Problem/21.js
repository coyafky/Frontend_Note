function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function sumOfFactorials(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
      sum += factorial(i);
    }
    return sum;
  }
  
  const limit = 20;
  const result = sumOfFactorials(limit);
  console.log(`The sum of factorials from 1! to ${limit}! is: ${result}`);