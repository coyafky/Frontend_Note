// 求数组的最大值

let arr = [1,2,3,4,5,6,7,8,9,10];

let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }else if(arr[i] < min){
        min = arr[i];
    }
}
console.log(max,min);