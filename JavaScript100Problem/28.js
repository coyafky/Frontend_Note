function printDigits(n) {
    // 基本情况：如果n为0，则直接返回
    if (n === 0) {
        return;
    }
    
    // 打印当前的最后一位
    console.log(n % 10);
    
    // 递归调用，去掉最后一位
    printDigits(Math.floor(n / 10));
}

// 示例调用
printDigits(12345);