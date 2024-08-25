// 去除数组中的重复项

// 思路 准备一个空结果数组，遍历原数组，如果遍历到的项不在结果shuzhi数组中，就把这个项添加到结果数组中


let arr = [1,1,1,1,2,3,4,5,2,4,5,6,7,8,9,7,8,9]

let  result =[];

for (let i=0;i<arr.length;i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }
}
console.log(result);
