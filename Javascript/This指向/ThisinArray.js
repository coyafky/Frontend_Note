const numbers = [1, 2, 3, 4, 5];

// 使用数组的map方法将每个元素乘以2
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers); // 输出 [2, 4, 6, 8, 10]