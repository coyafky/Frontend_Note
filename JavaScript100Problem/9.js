function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  const start = 101;
  const end = 200;
  const primes = findPrimesInRange(start, end);
  
  console.log(`在${start}到${end}之间的素数有${primes.length}个，分别是：`);
  console.log(primes.join(', '));