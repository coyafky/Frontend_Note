// RegExp实例方法

// RegExp实例的主要方法是exec()，主要用于配合捕获组使用。这个方法 只接收一个参数，即要应用模式的字符串。如果找到了匹配项，则返回 包含第一个匹配信息的数组；如果没找到匹配项，则返回null。返回的 数组虽然是Array的实例，但包含两个额外的属性：index和 input。index是字符串中匹配模式的起始位置，input是要查找的字符 串。这个数组的第一个元素是匹配整个模式的字符串，其他元素是与表 达式中的捕获组匹配的字符串。如果模式中没有捕获组，则数组只包含 一个元素


let text = 'mom abd dad and baby';

let pattern = /mom( and dad( and baby)?)?/gi; 
let matches = pattern.exec(text);

console.log(matches.index);
console.log(matches.input);

console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);



// 因为整个字符串匹配模式，所以matchs数组的index 属性就是0。数组的第一个元素是匹配的整个字符串，第二个元素是匹 配第一个捕获组的字符串，第三个元素是匹配第二个捕获组的字符串


