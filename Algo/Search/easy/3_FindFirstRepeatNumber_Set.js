
function findFirstRepeatNumber(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])){
            return nums[i];
        }
        else {
            set.add(nums[i]);
        }
    }
    return -1; // 如果没有重复数字，则返回-1
}

// 测试

const array = [1, 2, 3, 4, 5, 2, 6, 7];
const result = findFirstRepeatNumber(array);
console.log(result); // 输出 2