let numberObject = new Number(10);
let num = 10; console.log(num.toString()); // "10" 
console.log(num.toString(2)); // "1010" 
console.log(num.toString(8)); // "12" 
console.log(num.toString(10)); // "10" 
console.log(num.toString(16)); // "a"

// to  fixed

let num2 =10;
console.log(num2.toFixed(3)); // "10.000"


let num3 = 10.005; 
console.log(num.toFixed(2)); // "10.01"
// toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长 度，也可能是科学记数法形式

let num4 = 99
console.log(num4.toPrecision(3)); // "99"
console.log(num4.toPrecision(6)); // "99.000"

// isInteger()方法与安全整数


console.log(Number.isInteger(1));
console.log(Number.isInteger(1.0));
console.log(Number.isInteger(1.1));


// 为了鉴别整数是否在这个范围内，可以使 用Number.isSafeInteger()方法
console.log(Number.isSafeInteger(-1 * (2 ** 53))); // false 
console.log(Number.isSafeInteger(-1 * (2 ** 53) + 1)); // true 
console.log(Number.isSafeInteger(2 ** 53)); // false 
console.log(Number.isSafeInteger((2 ** 53) - 1)); // true