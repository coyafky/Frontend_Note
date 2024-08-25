
const readline = require('readline');

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sortThreeNumbers(a, b, c) {
    let numbers = [a, b, c];

    if (numbers[0] > numbers[1]) {
        swap(numbers, 0, 1);
    }
    if (numbers[1] > numbers[2]) {
        swap(numbers, 1, 2);
    }
    if (numbers[0] > numbers[1]) {
        swap(numbers, 0, 1);
    }

    return numbers;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入第一个数字: ', (a) => {
    rl.question('请输入第二个数字: ', (b) => {
        rl.question('请输入第三个数字: ', (c) => {
            // 将输入转换为数字
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            // 调用排序函数
            const sortedNumbers = sortThreeNumbers(a, b, c);
            console.log('按大小顺序输出: ', sortedNumbers);

            // 关闭readline接口
            rl.close();
        });
    });
});