// 单侧二进制搜索算法（查找目标值的左侧边界）
function leftBinarySearch(target, arr) {
    let left = 0;
    let right = arr.length;
  
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return left;
  }
  
  // 示例用法
  const sortedArray = [1, 2, 2, 2, 3, 4, 5];
  const targetValue = 2;
  console.log(leftBinarySearch(targetValue, sortedArray)); // 输出: 1（目标值2的左侧边界索引）