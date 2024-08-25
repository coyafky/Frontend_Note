function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // 如果数组长度为1或更小，它已经是排序好的
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const less = [];
    const greater = [];

    // 移除基准元素，以便在稍后将其添加回正确的位置
    arr.splice(pivotIndex, 1);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    // 递归地对小于和大于基准的数组进行排序，并将它们与基准元素合并
    return quickSort(less).concat(pivot, quickSort(greater));
}

// 示例用法
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr)); // 输出 [3, 9, 10, 27, 38, 43, 82]