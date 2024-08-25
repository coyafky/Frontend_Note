// 使用一个函数 实现数组拍平

// 递归方法
// 返回值是array


function flatten(arr) {
    // 创建一个空数组
    const result = [];
    
    // 遍历原数组

    for (let i =0 ; i < arr.length; i++)
        // 判断当前元素是否是数组
      if(Array.isArray(arr[i])){

        // 如果是数组，则递归调用flatArray函数
        result.push(...flatten(arr[i]));
        
      } else{

        //将当前元素添加到结果数组中
        result.push(arr[i]);
      }

    return result;
}
const a = [1, [2, [3, 4]]];
console.log(flatten(a));