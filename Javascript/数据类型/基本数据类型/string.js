console.log( typeof "MOOK");

// 区分数字和字符串
console.log( typeof 11);
console.log( typeof "11");

// 加号可以拼接字符串
console.log('Mo'+'IK');

// 要将一个变量的值插入到字符串中，要斩断链接

let year =2022;
let str ='北京冬季奥运会'+year+'年召开';
console.log(str);



// 空字符串
// 一些时候需要使用到空字符串，直接书写闭合的引号对就可以了

let strs = '';
console.log(strs);

// 字符串具有length属性，字符串的length属性表示字符串的长度

let strings = '北京冬季奥运会';
console.log(strings.length); //7
console.log(strs.length);//0


// 字符串的常用方法,方法就是可以打点调用的函数，字符串有7个方法
// charAt() 从字符串中获取指定位置的字符

console.log(strings.charAt(4)); //奥
console.log(strings.charAt(0)); //运
console.log(strings.charAt(strings.length-1)); //会
// 超出length-1 范围得到 空字符串
console.log(strings.charAt(100)); //空字符串



// substring() 从字符串中获取指定范围的字符串 （不包括结束位置）比如 susbstring(a,b) 从字符串中获取第a个到第b个的字符串

let los = '我喜欢js,我也喜欢HTML';

console.log(los.substring(0,3)); // 我喜
console.log(los.substring(0,los.length)); // 我喜欢js，我也喜欢HTML
console.log(los.substring(4,7));

// substring(a,b)方法 如果省略第二个参数，则默认获取到字符串的最后一个字符
console.log(los.substring(6)); // 我也喜欢HTML

// substring(a,b) 方法 a可以大于b，数字顺序自动调整 小数在前  substring(3,5)和substring(5,3)是等价的
console.log(los.substring(los.length ,4)); // s,我也喜欢HTML


// substr (a,b)中，将得到从a开始长度为b的子串

console.log(los.substr(0,3)); // 我喜欢
console.log(los.substr(3,2)); //js

// substr(a,b)中 a可以是负数，表示倒数位置
console.log(los.substr(-3,2)); //TM


// slice (a,b) 方法得到从a开始到b（不包含b）结束的子串
console.log(los.slice(0,3)); // 我喜
console.log(los.slice(3,los.length)); // js，我也喜欢HTML
// slice(a,b)中的参数a可以是负数
console.log(los.slice(-3,los.length)); // TML
console.log(los.slice(-4,-1));
console.log(los.slice(5,2));

// toUpperCase() 将字符串转换为大写

console.log(los.toUpperCase()); // 我喜欢JS，我也喜欢HTML

// toLowerCase() 将字符串转换为小写
console.log(los.toLowerCase()); // 我喜欢js，我也喜欢html

// indexof 返回某个指定的字符串的值在字符串首次出现的位置
// 如果要检索的值没有出现，则返回-1

let words ='abcdeb';
console.log(words.indexOf('b')); //1
console.log(words.indexOf('de')); //3
console.log(words.indexOf('m')); //-1







