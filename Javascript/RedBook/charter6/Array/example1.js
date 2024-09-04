let color = new Array();

let colors = new Array(20);
console.log(colors.length);

let colors2 = new Array(20, 30, 50);
console.log(colors2.length);


// 创建数组时可以给构造函数传一个值。因为如果 这个值是数值，则会创建一个长度为指定数值的数组；而如果这个值是 其他类型的，则会创建一个只包含该特定值的数组

// 另一种创建数组的方式是使用数组字面量（array literal）表示法

let colors3 = ["red", "blue", "green"]; // 创建一个包含3个元素的数组 
let names = []; // 创建一个空数组 
let values = [1,2,]; // 创建一个包含2个元素的数组

// Array构造函数还有两个ES6新增的用于创建数组的静态方法：from()和 of()。
// from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例

console.log(Array.from("Matt")); // ["M", "a", "t", "t"]

const m = new Map().set(1, 2)
    .set(3, 4);
const s = new Set().add(1)
    .add(2)
    .add(3)
    .add(4);

console.log(Array.from(m)); // [[1, 2], [3, 4]]
console.log(Array.from(s)); // [1, 2, 3, 4]

const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log(a1); // [1, 2, 3, 4]
console.log(a1 === a2); // false

const iter = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
};

console.log(Array.from(iter)); // [1, 2, 3, 4]

function getArgsArray() {
    return Array.from(arguments);
}

console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]

const arrayLikeObject = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
};

console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]

// Array.of()可以把一组参数转换为数组。这个方法用于替代在ES6之前 常用的Array.prototype.slice.call(arguments

console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4] 
console.log(Array.of(undefined)); // [undefined]