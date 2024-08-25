let array = ["red", "green"];

// 使用 unshift 一次添加多个元素
let newLength = array.unshift("blue", "yellow", "orange");

console.log(array); // 输出: ["blue", "yellow", "orange", "red", "green"]
console.log(newLength); // 输出: 5