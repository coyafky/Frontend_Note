// 所有这些类型都兼容扩展操作符。扩展操作符在对可迭代对 象执行浅复制时特别有用

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);
console.log(arr2 === arr1); // false

// 期待可迭代对象的构造函数，只要传入一个可迭代对象就可以实现 复制：

let map1 = new Map([
  [1, 2],
  [3, 4],
]);
let map2 = new Map(map1);
console.log(map1);
console.log(map2);
// Map(2) { 1 => 2, 3 => 4 }
// Map(2) { 1 => 2, 3 => 4 }

// 可以构建数组的部分元素：

let arr3 =[1,2,3];
let arr4 =[14,5,...arr3,22]; // [ 14, 5, 1, 2, 3, 22 ]
console.log(arr4);


// 浅复制意味着只会复制对象引用：

let arr5 =[{}];
let arr6 =[...arr5];
arr5[0].foo ='bar' ;
console.log(arr6[0]); // { foo: 'bar' }

console.log(arr6[0].foo); //bar

// 比如Array.of()和Array.from() 静态方法。在与扩展操作符一起使用时，可以非常方便地实现互操作

let arr8 =[1,2,3];
let typedArr1 = Int16Array.of(...arr8);
let typedArr2 = Int16Array.from(...arr8);
console.log(typedArr1);
console.log(typedArr2);

//把数组复制到映射 
let map = new Map(arr1.map((x) => [x, 'val' + x])); 
console.log(map); // Map {1 => 'val 1', 2 => 'val 2', 3 => 'val 3'}
 // 把数组复制到集合 
let set = new Set(typedArr2); console.log(set); // Set {1, 2, 3} /
// 把集合复制回数组
let arr9= [...set]; console.log(arr9); // [1, 2, 3]