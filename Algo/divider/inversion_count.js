function mergeSortAndCount(arr) {
    if (arr.length <= 1) {
        return { sortedArray: arr, inversions: 0 };
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftResult = mergeSortAndCount(left);
    const rightResult = mergeSortAndCount(right);

    const merged = mergeAndCount(leftResult.sortedArray, rightResult.sortedArray);

    return {
        sortedArray: merged.sortedArray,
        inversions: leftResult.inversions + rightResult.inversions + merged.inversions
    };
}

function mergeAndCount(left, right) {
    let i = 0;
    let j = 0;
    let inversions = 0;
    const merged = [];

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
            // 当右半部分的元素小于左半部分的元素时，
            // 左半部分中剩余的元素都与当前右半部分的元素形成逆序对
            inversions += left.length - i;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }

    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return { sortedArray: merged, inversions };
}

// 示例用法
let arr = [1, 3, 5, 2, 4, 6];
let result = mergeSortAndCount(arr);
console.log("Sorted Array:", result.sortedArray);
console.log("Inversion Count:", result.inversions);