// 复制和填充方法

const zeroes = [0, 0, 0, 0, 0]; // 用5填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5, 5, 5, 5, 5]
zeroes.fill(0); // 重置 // 用6填充索引大于等于3的元素
zeroes.fill(6, 3);
console.log(zeroes); // [0, 0, 0, 6, 6]
zeroes.fill(0); // 重置 // 用7填充索引大于等于1且小于3的元素
zeroes.fill(7, 1, 3);
console.log(zeroes); // [0, 7, 7, 0, 0];
zeroes.fill(0); // 重置 // 用8填充索引大于等于1且小于4的元素 // (-4 + zeroes.length = 1) // (-1 + zeroes.length = 4)
zeroes.fill(8, -4, -1);
console.log(zeroes); // [0, 8, 8, 8, 0];

// fill()静默忽略超出数组边界、零长度及方向相反的索引范围

const zeroes2 = [0, 0, 0, 0, 0]; // 索引过低，忽略
zeroes2.fill(1, -10, -6);
console.log(zeroes2); // [0, 0, 0, 0, 0] // 索引过高，忽略
zeroes2.fill(1, 10, 15);
console.log(zeroes2);
// [0, 0, 0, 0, 0] // 索引反向，忽略
zeroes2.fill(2, 4, 2);
console.log(zeroes2); // [0, 0, 0, 0, 0] // 索引部分可用，填充可用部分
zeroes2.fill(4, 3, 10);
console.log(zeroes2); // [0, 0, 0, 4, 4]

// fill()不同，copyWithin()会按照指定范围浅复制数组中的部分内 容，然后将它们插入到指定索引开始的位置。开始索引和结束索引则 与fill()使用同样的计算方

let ints,
  reset = () => (ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
reset(); // 从ints中复制索引0开始的内容，插入到索引5开始的位置 // 在源索引或目标索引到达数组边界时停止
ints.copyWithin(5);
console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4] reset(); // 从ints中复制索引5开始的内容，插入到索引0开始的位置
ints.copyWithin(0, 5);
console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9] reset(); // 从ints中复制索引0开始到索引3结束的内容 // 插入到索引4开始的位置
ints.copyWithin(4, 0, 3);
alert(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();
// JavaScript引擎在插值前会完整复制范围内的值 // 因此复制期间不存在重写的风险
ints.copyWithin(2, 0, 6);
alert(ints); // [0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
reset(); // 支持负索引值，与fill()相对于数组末尾计算正向索引的过程是一样的
ints.copyWithin(-4, -7, -3);
alert(ints); // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6]


// copyWithin()静默忽略超出数组边界、零长度及方向相反的索引范围：