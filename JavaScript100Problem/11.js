function primeFactors(n) {
    let factors = [];
    // 从最小的质数2开始
    for (let divisor = 2; n >= 2;) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  function printPrimeFactors(n) {
    const factors = primeFactors(n);
    const factorString = factors.join(' * ');
    console.log(`${n} = ${factorString}`);
  }
  
  // 示例：输入90
  printPrimeFactors(90);