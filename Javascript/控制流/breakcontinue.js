// 使用 break 语句
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // 当 i 等于 3 时，终止循环
    }
    console.log(i);
  }
  // 输出：1 2
  
  // 使用 continue 语句
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // 当 i 等于 3 时，跳过当前迭代
    }
    console.log(i);
  }
  // 输出：1 2 4 5
  