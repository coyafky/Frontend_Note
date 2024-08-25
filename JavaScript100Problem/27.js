function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // 找到目标值，返回其索引
        } else if (arr[mid] < target) {
            left = mid + 1; // 目标值在右半部分
        } else {
            right = mid - 1; // 目标值在左半部分
        }
    }

    return -1; // 没有找到目标值
}

// 示例调用
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;
let result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`元素 ${target} 在数组中的索引是 ${result}`);
} else {
    console.log(`元素 ${target} 不在数组中`);
}