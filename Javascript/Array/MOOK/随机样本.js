// 随机从原数组中取3项

// 思路 从原数组中随机选取3个元素，不允许重复


let arr = [1,2,3,4,5,6,7,8,9,10];
let result = [];

for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * arr.length);
    result.push(arr[index]);
    arr.splice(index, 1);
}
console.log(result);