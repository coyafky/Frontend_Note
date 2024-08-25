function power(x, n) {
    // 基本情况：如果n为0，任何数的0次方都是1
    if (n === 0) {
        return 1;
    }

    // 如果n是负数，将问题转换为1/x的正数次方
    if (n < 0) {
        return 1 / power(x, -n);
    }

    // 如果n是奇数，先计算x的n-1次方，然后乘以x
    if (n % 2 === 1) {
        return x * power(x, n - 1);
    }

    // 如果n是偶数，计算x的n/2次方，然后平方
    let half = power(x, n / 2);
    return half * half;
}

// 示例用法
let x = 2;
let n = 10;
console.log(power(x, n)); // 输出 1024