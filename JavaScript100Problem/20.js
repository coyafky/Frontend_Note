
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  function sumOfFractionSequence(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      let numerator = fibonacci(i + 1);
      let denominator = fibonacci(i);
      sum += numerator / denominator;
    }
    return sum;
  }
  
  const n = 20;
  console.log(`The sum of the first ${n} terms of the sequence is: ${sumOfFractionSequence(n)}`);