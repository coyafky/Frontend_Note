//  dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]

function minPathSum(grid) {
  // 获取网格的行数和列数
  const rows = grid.length;
  const cols = grid[0].length;

  // 创建一个二维数组dp，用于存储到达每个单元格的最小路径和
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(Infinity));

  // 初始化起点的最小路径和
  dp[0][0] = grid[0][0];

  // 计算第一列的最小路径和
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // 计算第一行的最小路径和
  for (let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // 通过动态规划计算其余单元格的最小路径和
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // 返回右下角单元格的值作为最小路径和的结果
  return dp[rows - 1][cols - 1];
}
