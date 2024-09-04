let stringObject = new String("hello world");

let stringValue = "hello world";

console.log(stringValue.length);

let messgae = "abcde";
console.log(messgae.length);
console.log(messgae.charAt(2));

console.log(message.charCodeAt(2)); // 99

// fromCharCode()方法用于根据给定的UTF-16码元创建字符串中的字 符
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"

console.log(message.codePointAt(1)); // 98
console.log(message.codePointAt(2)); // 128522
console.log(message.codePointAt(3)); // 56842
console.log(message.codePointAt(4)); // 100

// normalize()方法

// 字符串位置方法 indexOf()和 lastIndexOf()

let stringValue2 = "hello world";
console.log(stringValue2.indexOf("o"));
console.log(stringValue2.lastIndexOf("o"));
// 这两个方法都可以接收可选的第二个参数，表示开始搜索的位置

console.log(stringValue2.indexOf("o", 2));

console.log(stringValue2.lastIndexOf("o", 5));

// 字符串包含方法
// startsWith()、endsWith()和includes()。这些方法都会 从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔 值

// startsWith()检查开始于索引0的匹配 项
// endsWith()检查开始于索引(string.length - substring.length)的匹配项
// includes()检查整个字符串

let message3 = "foobarbaz";

// startsWith()和includes()方法接收可选的第二个参数，表示开始 搜索的位置。如果传入第二个参数，则意味着这两个方法会从指定 位置向着字符串末尾搜索，忽略该位置之前的所有字符

console.log(message3.startsWith("foo"));
console.log(message3.startsWith("foo", 3));
console.log(message3.endsWith("bar"));
console.log(message3.endsWith("bar", 9));
console.log(message3.includes("bar"));
console.log(message3.includes("bar", 9));

// endsWith()方法接收可选的第二个参数，表示应该当作字符串末尾 的位置。如果不提供这个参数，那么默认就是字符串长度。如果提 供这个参数，那么就好像字符串只有那么多字符一样：
console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true

// trim()方法 ECMAScript在所有字符串上都提供了trim()方法。这个方法会创建 字符串的一个副本，删除前、后所有空格符，再返回结果

let message4 = "  hello world  ";
console.log(message4);

console.log(message4.trim());

// repeat()方法 这个方法接收 一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副 本后的结果

let message5 = "hello world";
console.log(message5.repeat(3));
console.log(messgae5);

// padStart()和padEnd()方法

let stringValue4 = "foo";
console.log(stringValue4.padStart(6));
// " foo"
console.log(stringValue4.padStart(9, ".")); // "......foo"
console.log(stringValue4.padEnd(6)); // "foo "
console.log(stringValue4.padEnd(9, ".")); // "foo......"

// 可选的第二个参数并不限于一个字符。如果提供了多个字符的字符 串，则会将其拼接并截断以匹配指定长度。此外，如果长度小于或 等于字符串长度，则会返回原始字符串

// 字符串迭代与解构
let message = "abc"; 
let stringIterator = message[Symbol.iterator](); 
console.log(stringIterator.next()); // {value: "a", done: false} 
console.log(stringIterator.next()); // {value: "b", done: false} 
console.log(stringIterator.next()); // {value: "c", done: false} 
console.log(stringIterator.next()); // {value: undefined, done: true}

// 字符串大小写转换



// 字符串模式匹配方法