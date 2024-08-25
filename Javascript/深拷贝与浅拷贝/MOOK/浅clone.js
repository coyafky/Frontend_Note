let arr1 =[1,2,2,3,4[1,2,3,4]]
// 结果数组

let arr2 =[];


// 遍历数组的每一项，把遍历到data的每一项拷贝到result中

for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i])
}

console.log(arr2)
// [ 1, 2, 2, 3, undefined ]

console.log(arr1===arr2); // false,在引用类型比较的时候，比较的是内存地址


