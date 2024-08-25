function gcd(m, n) {
    while (n !== 0) {
      let temp = n;
      n = m % n;
      m = temp;
    }
    return m;
  }
  
  function lcm(m, n) {
    return (m * n) / gcd(m, n);
  }
  
  // 示例使用
  let m = 24;
  let n = 36;
  
  console.log(`最大公约数 (GCD) 是: ${gcd(m, n)}`);
  console.log(`最小公倍数 (LCM) 是: ${lcm(m, n)}`);