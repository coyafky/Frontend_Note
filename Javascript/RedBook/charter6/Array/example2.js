// 用数组字面量初始化数组时，可以使用一串逗号来创建空位 （hole）。E

const options = [,,,,,]; // 创建包含5个元素的数组 
console.log(options.length); //
 console.log(options); // [,,,,,]

 const options2 = [1,,,,5];

 for (const option of options2) {
     console.log(option);
 }



 const a = Array.from([,,,]); // 使用ES6的Array.from()创建的包含3个空位的数组
 
 for (const val of a) { alert(val === undefined); }