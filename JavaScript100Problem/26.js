function swapElements(arr) {
    if (arr.length === 0) {
        console.log("数组为空");
        return;
    }

    // 找到最大值和最小值的索引
    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // 最大的与第一个元素交换
    let temp = arr[0];
    arr[0] = arr[maxIndex];
    arr[maxIndex] = temp;

    // 最小的与最后一个元素交换
    temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[minIndex];
    arr[minIndex] = temp;

    return arr;
}

// 示例调用
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("原始数组: ", array);
let result = swapElements(array);
console.log("交换后的数组: ", result);