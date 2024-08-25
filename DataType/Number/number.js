var num = new Number(10);
console.log(num.toString(),num.toLocalString()); // 返回字符串形式的数值
console.log(num.valueOf()); // 返回基本类型的数值


var a = new Number(10);
var b = 20;
console.log(typeof a); // object
console.log(typeof b); // number

var c = new String(10);
console.log(a.toString()); // "10"
console.log(a.valueOf()); // "10"
console.log(a.toLocaleString()); // "10"