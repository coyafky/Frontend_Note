// 开头和结尾的引号必须是同一种

// 字符字面量

let text = 'this is a letter sigima \u03A9';
console.log(text.length);

// 转换为字符串

let age =11;
let agetoString = age.toString();
console.log(agetoString);

let found =true;
let foundToString =found.toString();
console.log(foundToString);
// null 和 undefined 没有toString方法

// tostring ，默认传输的是10进制 ，加入参数可以传入其他进制的函数

let num = 10;
let numToString = num.toString(16);
console.log(numToString);


// String

let value1 = String(10);
console.log(value1);
let value2 = String(true);
console.log(value2);
let value3 ;
console.log(String(value3));
let value4 = null;
console.log(String(value4));


// 模版字符串
// 模版字符串可以跨行保持