const readline = require('readline');

function isLeapYear(year) {
    // 判断是否为闰年
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dayOfYear(year, month, day) {
    // 每个月的天数
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 计算这一天是这一年的第几天
    let dayCount = 0;
    for (let i = 0; i < month - 1; i++) {
        dayCount += daysInMonth[i];
    }
    dayCount += day;
    
    return dayCount;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('请输入年份: ', (year) => {
    rl.question('请输入月份: ', (month) => {
        rl.question('请输入日期: ', (day) => {
            const result = dayOfYear(parseInt(year), parseInt(month), parseInt(day));
            console.log(`${year}年${month}月${day}日是这一年的第${result}天`);
            rl.close();
        });
    });
});