function minFallingPathSum(matrix) {
    const n = matrix.length;
    if (n === 1) {
      return matrix[0][0];
    }
    const dp = new Array(n).fill(0).map(() => new Array(n + 2).fill(10100));
    let res = Infinity;
  
    for (let i = 0; i < n; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = matrix[i][j - 1];
      }
    }
  
    for (let i = 1; i < n; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(
          Math.min(dp[i - 1][j - 1], dp[i - 1][j + 1]),
          dp[i - 1][j]
        ) + matrix[i][j - 1];
        if (i === n - 1) {
          res = Math.min(res, dp[i][j]);
        }
      }
    }
  
    return res;
  }