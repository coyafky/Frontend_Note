const readline = require('readline');

function processNumber(num) {
    // 确保输入是一个不多于5位的正整数
    if (typeof num !== 'number' || num <= 0 || num > 99999 || !Number.isInteger(num)) {
        console.log("输入必须是1到5位之间的正整数");
        return;
    }

    // 将数字转换为字符串
    const numStr = num.toString();

    // 求它是几位数
    const length = numStr.length;
    console.log(`这个数是${length}位数`);

    // 逆序打印出各位数字
    const reversedStr = numStr.split('').reverse().join('');
    console.log(`逆序打印出各位数字: ${reversedStr}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入一个不多于5位的正整数: ', (input) => {
    // 将输入转换为数字
    const num = parseInt(input, 10);

    // 调用处理函数
    processNumber(num);

    // 关闭readline接口
    rl.close();
});