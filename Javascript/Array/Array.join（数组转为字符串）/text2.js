//  Tostring 和join 的不同点

const array = [1, 2, 3];
console.log(array.toString()); // 输出: "1,2,3"

const nestedArray = [[1, 3], [2, 4]];
console.log(nestedArray.toString()); // 输出: "1,3,2,4"

const array2 = [1, 2, 3];
console.log(array2.join()); // 输出: "1,2,3"
console.log(array2.join('-')); // 输出: "1-2-3"

const nestedArray2 = [[1, 3], [2, 4]];
console.log(nestedArray2.join()); // 输出: "1,3,2,4"
console.log(nestedArray2.join('|')); // 输出: "1,3|2,4"