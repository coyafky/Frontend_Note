function countRepeat(arr) {
    const countMap = {};
  
    for (const num of arr) {
      if (countMap[num]) {
        countMap[num]++;
      } else {
        countMap[num] = 1;
      }
    }
  
    return countMap;
  }
  
  // 调用样例
  console.log(countRepeat([2, 9, 8, 4, 5, 3, 4, 8, 9, 9, 1, 0, 2, 1]));
  /* 输出结果
  {
    '0': 1,
    '1': 2,
    '2': 2,
    '3': 1,
    '4': 2,
    '5': 1,
    '8': 2,
    '9': 3
  } */