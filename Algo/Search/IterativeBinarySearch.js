
function iterativeBinarySearch(arr, target) {
    let start =0;
    let end = arr.length -1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === target){
            return mid; // 找到目标值，返回索引
        }
        else if(arr[mid] < target){
            start = mid + 1;  // 目标值在右侧，更新起始位置
        }
        else{
            end = mid - 1;  // 目标值在左侧，更新结束位置
        }
    }
    return -1;  // 未找到目标值，返回-1
}

// 示例用法
const sortedArray = [1, 2, 4, 5, 7, 8, 9];
const targetValue = 7;
console.log(iterativeBinarySearch(sortedArray, targetValue)); // 输出: 4 (目标值7的索引)

// 另一个示例
const sortedArray2 = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue2 = 23;
console.log(iterativeBinarySearch(sortedArray2, targetValue2));