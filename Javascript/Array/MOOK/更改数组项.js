// 数组不是只读的，我们可以修改它其中任何项的值

let arr = [2,7,3,7]
arr[1]++;
arr[2] =0;
console.log(arr); // [2,8,0,7]
// 更改的数组项超过了length+1 就会创造这项

arr [7] = 7;
console.log(arr.length);
console.log(arr); // [ 2, 8, 0, 7, <3 empty items>, 7 ]

// 数组的遍历 ，数组的最大优点是方便遍历

let arr2 =[1,2,3,4,5,6,7,8,9,10];
for(let i =0;i<arr2.length;i++){
    console.log(arr2[i]);
}

// 数组是 存储一组相关的值，
// 数组的简介和定义

let scoreArr = [96,98,97,92,92]

// 定义1
let arr3 = ['A','B','C'];

// 定义2

let arr4 = new Array ('A','B','C','D','E')


// 定义3  表示定义了一个长度是5的数组，但是这5项都是undefined
let arr5 = new Array(5); 
console.log(arr5); // [ <5 empty items> ]


// 下标越界 javascript 规定 访问数组中不存在的向会放回undefined

console.log(arr3[5]); // undefined
console.log(arr3[-1]); // undefined
console.log(arr3[100]); // undefined


// 数组的长度，数组的length属性是表示它的长度

// 数组的最后一项的下标是数组的长度-1
console.log(arr3.length); //3
console.log(arr3[arr3.length-1]); //C



