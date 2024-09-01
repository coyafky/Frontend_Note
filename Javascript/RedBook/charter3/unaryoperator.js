let age = 29;
console.log(++age); //30
console.log(age); //30

let age2 = 29;
console.log(--age2);
console.log(age2);

let age3 = 29;
let anotherage = --age3 + 2;
console.log(age3);
console.log(anotherage);

// 前缀递增和递减在语句中的优先级是相等的，因此会从左到右依次 求值
let num1 = 2;
let num2 = 20;
let num3 = --num1 + num2;
let num4 = num1 + num2;
console.log(num3); // 21 console.log(num4); // 21

let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  },
};
s1++; // 值变成数值3 s2++; // 值变成NaN b++; // 值变成数值1 f--; // 值变成0.10000000000000009（因为浮点数不精确） o--; // 值变成-2
