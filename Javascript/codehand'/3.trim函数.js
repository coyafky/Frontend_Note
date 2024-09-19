function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }
  
  // 示例用法
  const text = "   Hello, World!   ";
  const trimmedText = trim(text);
  console.log(trimmedText); // 输出: "Hello, World!"

  // 手动实现一个trim函数
  function trimText(str) {
      // 手写一个自定义的函数来去除字符串两端的空格
      let start = 0;
      let end = str.length - 1;
      while (start <= end && str[start] === ' ') {
            start++;
      }

      while (start <= end && str[end] === ' ') {
          end--;
      }
        // 返回去除空格后的子字符串
  return str.substring(start, end + 1);
  }

  const text2 = "   Hello, World!   ";
  const trimmedText2 = trimText(text2);
  console.log(trimmedText2); // 输出: "Hello, World!"