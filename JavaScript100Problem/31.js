function camelCase(str) {
    // 将所有非字母字符替换为空格
    let cleanedStr = str.replace(/[^a-zA-Z]+/g, ' ');
    
    // 将字符串转换为小写
    cleanedStr = cleanedStr.toLowerCase();
    
    // 将字符串按空格分割成单词数组
    let words = cleanedStr.split(' ');
    
    // 将每个单词的首字母大写，除了第一个单词
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // 将处理后的单词数组拼接成一个字符串
    return words.join('');
  }
  
  // 调用样例
  console.log(camelCase('hey guys'));           // 'heyGuys'
  console.log(camelCase('HELLO-world'));        // 'helloWorld'
  console.log(camelCase('oh  mY---gOd'));       // 'ohMyGod'