// 数组拍平
function flat(arr) {
    // 创建一个新数组来存储拍平后的元素
    const newArr = [];
  
    // 遍历原数组
    for (let i = 0; i < arr.length; i++) {
      // 如果当前元素是一个数组，则递归拍平它
      if (Array.isArray(arr[i])) {
        newArr.push(...flat(arr[i]));
      } else {
        // 如果当前元素不是数组，则直接添加到新数组中
        newArr.push(arr[i]);
      }
    }
  
    // 返回拍平后的数组
    return newArr;
  }
  