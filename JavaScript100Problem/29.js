function getDaysDifference(date1, date2) {
    // 将日期字符串转换为 Date 对象
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // 计算两个日期的时间差（以毫秒为单位）
    const timeDifference = d2 - d1;

    // 将时间差转换为天数
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// 示例使用
const date1 = '2023-10-01';
const date2 = '2023-10-10';
const daysDifference = getDaysDifference(date1, date2);
console.log(`两个日期之间的天数差是: ${daysDifference} 天`);