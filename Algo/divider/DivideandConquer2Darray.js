function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return { row, col };
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }

    return { row: -1, col: -1 }; // 如果没有找到目标元素
}

// 示例用法
let matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
let target = 29;
console.log(searchInSortedMatrix(matrix, target)); // 输出 { row: 2, col: 1 }