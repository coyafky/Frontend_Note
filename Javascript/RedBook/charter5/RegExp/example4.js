// 如果没有设置全局标记，则无论对同一个字符串调用多少 次exec()，也只会返回第一个匹配的信息。
let text ='cat,bat,sat,fat';

let pattern =/.at/

let matches = pattern.exec(text);

console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

matches =pattern.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);



// 面例子中的模式没有设置全局标记，因此调用exec()只返回第一个匹 配项（"cat"）。lastIndex在非全局模式下始终不变。

