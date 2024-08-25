// number 数字类型 所有数字不分打下，整浮 正负 都是数字类型

console.log( typeof 3);
console.log( typeof -3);
console.log(typeof 3.14);


console.log( typeof .5);
console.log( .5); // 0.5

// 科学计数法 ，较大的数可以使用科学计数法表示

console.log(3e8);
console.log( typeof 3e8);

console.log(3e-4);
console.log( typeof 3e-4);

// 不同进制的数字

// 16进制是数字是以0x开头的
console.log(0xff);
console.log(typeof 0xff);

// 二进制是数字是以0b开头的
console.log(0b11111111);


console.log(0o377);


// NaN 无穷大

console.log( typeof NaN);

console.log(0/0); //NaN

console.log('我' - '你'); // NaN

console.log(NaN === NaN); // false


