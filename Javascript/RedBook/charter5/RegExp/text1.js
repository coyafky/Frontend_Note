let pattern1 = /at/g; // 匹配第一个"bat"或"cat"，忽略大小写 
let pattern2 = /[bc]at/i; // 匹配所有以"at"结尾的三字符组合，忽略大小写 
let pattern3 = /.at/gi;


// 匹配第一个"bat"或"cat"，忽略大小写
 let pattern4 = /[bc]at/i; // 匹配第一个"[bc]at"，忽略大小写 
 let pattern5 = /\[bc\]at/i; // 匹配所有以"at"结尾的三字符组合，忽略大小写 
 let pattern6 = /.at/gi; // 匹配所有".at"，忽略大小写 let pattern4 = /\.at/gi;

// 正则表达式都是使用字面量形式定义的。正则表达式也可 以使用RegExp构造函数来创建

// 匹配第一个"bat"或"cat"，忽略大小写 
let pattern7 = /[bc]at/i; // 跟pattern7一样，只不过是用构造函数创建的 
let pattern8 = new RegExp("[bc]at", "i");