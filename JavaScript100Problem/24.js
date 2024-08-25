const readline = require('readline');

function isPalindrome(num) {
    // 确保输入是一个5位的正整数
    if (typeof num !== 'number' || num < 10000 || num > 99999 || !Number.isInteger(num)) {
        console.log("输入必须是5位的正整数");
        return;
    }

    // 将数字转换为字符串
    const numStr = num.toString();

    // 判断是否是回文数
    const reversedStr = numStr.split('').reverse().join('');
    if (numStr === reversedStr) {
        console.log(`${num} 是回文数`);
    } else {
        console.log(`${num} 不是回文数`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入一个5位的正整数: ', (input) => {
    // 将输入转换为数字
    const num = parseInt(input, 10);

    // 调用判断函数
    isPalindrome(num);

    // 关闭readline接口
    rl.close();
});