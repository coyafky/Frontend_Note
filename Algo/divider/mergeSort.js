function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // 如果数组长度为1或更小，它已经是排序好的
    }

    // 分解：找到数组的中间点
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // 解决：递归地对左右两半进行排序
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // 合并：将排序好的左右两半合并
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // 合并两个有序数组
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // 将剩余的元素添加到结果数组中
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // 输出 [3, 9, 10, 27, 38, 43, 82]
