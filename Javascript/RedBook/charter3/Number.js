let intNum =15;

let octalNum1=0o70;
console.log(octalNum1);

let hexNum1 =0xA;
console.log(hexNum1);

// 使用8进 和16进制的格式创建的数值在数学操作中都被视为10进制数值

// 浮点值，浮点值存储内容的空间是整数数值的2倍，在小数点没有数字的情况下，数字会被当成整数处理

let flaotNum1=1;
let flaotNum2= 10.0;
let flaotNum3= 3.125e7;

// 浮点值的精确度最高是 17位小数

// 计算的值超出了 JavaScript中规定的范围 -使用Infinity 和 负Infinity


// NaN -意思是 not a number 表示要返回的数值操作失败了

console.log(0/0); // NaN

console.log(-0+0); //NaN

console.log(5/0); //Infinity
console.log(-5/0); // -Infinity


// isNaN 函数 - 接收一个参数 -判断在这个参数是否是“not a NaN" 
// 把一个值传给isNaN()函数后 - 这个函数会自动将他转换为数值

console.log(isNaN(10));
console.log(isNaN(false));

console.log(isNaN('01'));

console.log(isNaN(true));

// 数值转换

// 三个函数 Number ParsentInt ParseFloat

// Number() 函数的转换规则

let num1 = Number('10');
let num2 =Number('hello')
let num3 = Number('000011');
let num4 = Number(true);
let num5 = Number(false);
console.log(num1,num2,num3,num4,num5);


// parseInt()函数

let num6 = parseInt('10');
let num7 =parseInt('1234hello');
let num8 =parseInt('000011');
let num9 =parseInt(true);
let num10 =parseInt(false);
let num11 =parseInt('10.5');
let num12 =parseInt("Oxf");
console.log(num6,num7,num8,num9,num10);

// parseInt（a,b）  parseInt函数也可以接受第二个参数 数值类型
let num13 =parseInt('10',2);
let num14 =parseInt('10',8);
let num15 =parseInt('10',10);
let num16 =parseInt('10',16);
console.log(num13,num14,num15,num16);

// parseFloat()函数


let num17 =parseFloat('10');
let num18 =parseFloat('10.5');
let num19 =parseFloat('10.5.34');
let num20 =parseFloat("0809.5");
let num21 =parseFloat(false);
console.log(num17,num18,num19,num20,num21);

