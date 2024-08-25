function findFirstDuplicateWithHash(arr) {
    let hash = {}; // 创建一个空的哈希表

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            return arr[i]; // 如果当前元素已经在哈希表中存在，则返回该元素作为第一个重复元素
        } else {
            hash[arr[i]] = true; // 将当前元素存储在哈希表中
        }
    }

    return -1; // 如果没有重复元素，则返回-1
}

// 示例用法
const array = [1, 2, 3, 4, 5, 2, 6, 7];
const firstDuplicate = findFirstDuplicateWithHash(array);
console.log("第一个重复元素是：" + firstDuplicate);