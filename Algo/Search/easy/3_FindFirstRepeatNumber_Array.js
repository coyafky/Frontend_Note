function findFirstRepeatNumber(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
    return -1; // 如果没有重复数字，则返回-1
}

const UnsortedArray = [1, 2, 3, 4, 5, 2, 6, 7];

console.log(findFirstRepeatNumber(UnsortedArray)); // 输出2