// Sentinel线性搜索
function sentinelLinearSearch(array, target) {
    const length = array.length;
    const last = array[length - 1];
    array[length - 1] = target; // 将目标值作为哨兵值放在末尾
  
    let i = 0;
    while (array[i] !== target) {
      i++;
    }
  
    array[length - 1] = last; // 恢复末尾元素
  
    if (i < length - 1 || target === array[length - 1]) {
      return i; // 返回索引
    } else {
      return -1; // 未找到返回-1
    }
  }
  
  console.log(sentinelLinearSearch([3, 7, 1, 9, 5], 9)); // 输出: 3