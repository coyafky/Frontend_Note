function flatten(arr) {
    let result = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        // 如果当前元素是数组，递归展平并将其结果合并到结果数组中
        result = result.concat(flatten(item));
      } else {
        // 如果当前元素不是数组，直接添加到结果数组中
        result.push(item);
      }
    });
  
    return result;
  }
  
  // 调用样例
  console.log(flatten([1, 2, 3]));                // [1, 2, 3]
  console.log(flatten([1, 2, [3]]));              // [1, 2, 3]
  console.log(flatten([1, 2, [[3], 4]]));         // [1, 2, 3, 4]
  console.log(flatten([1, [2, [[3], [4]]]]));     // [1, 2, 3, 4]