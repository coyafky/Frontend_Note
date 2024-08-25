function firstNonRepeat(str) {
    // 创建一个对象来记录每个字符出现的次数
    const charCount = {};
  
    // 第一次遍历字符串，记录每个字符出现的次数
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // 第二次遍历字符串，找到第一个出现次数为1的字符
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // 如果没有找到未重复的字符，返回空字符串
    return '';
  }
  
  // 调用样例
  console.log(firstNonRepeat('aaabccc'));     // 'b'
  console.log(firstNonRepeat('aabccbd'));     // 'd'
  console.log(firstNonRepeat('aabxbcc'));     // 'x'
  console.log(firstNonRepeat('6666666'));     // ''