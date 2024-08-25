
function factorial(n) {
    // 基本情况：如果n为1或0，阶乘为1
    if (n === 1 || n === 0) {
      return 1;
    }
    // 递归情况：n的阶乘等于n乘以(n-1)的阶乘
    return n * factorial(n - 1);
  }
  
  // 计算5的阶乘
  const result = factorial(5);
  console.log(result); // 输出120