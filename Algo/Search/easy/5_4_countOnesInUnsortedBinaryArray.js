function countOnesInUnsortedBinaryArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
        }
    }
    return count;
}

// 示例用法
const unsortedBinaryArray = [1, 0, 1, 1, 0, 1, 0];
const countOnes = countOnesInUnsortedBinaryArray(unsortedBinaryArray);
console.log("非排序的二进制数组中1的个数为：" + countOnes);