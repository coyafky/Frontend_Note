
// join 数组转为字符串

// join（）参数表示以什么字符作为连接符，如果留空则默认以逗号分隔，如同调用toSTring 方法



// spilt()参数表示以什么字符拆分字符串，一般不能留空


let a = [22,33,44,55];
console.log(a.join());
console.log(a.join('-'));
console.log(a.join(','));


console.log(a.toString());


// 22,33,44,55
// 22-33-44-55
// 22,33,44,55
// 22,33,44,55

let b ='abcdefg';
console.log(b.split());
console.log(b.split(''));

let c='a-b-c-d-e-f-g';
console.log(c.split('-'));

// [ 'abcdefg' ]
// [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g'
// ]
// [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g'
// ]

// 字符串可以以使用方括号内写下标的形式，访问某个字符，等价于charAt()方法

let d ='我爱佛大'
console.log(d[0]);
console.log(d[1]);

// 字符串的一些方法介意转换为数组接轨

// concat方法 拼接数组，返回拼接后的数组

let e =['a','b','c'];
let f = ['d','e','f'];
let g = e.concat(f);
console.log(g);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 =  [7,8,9];

let arr4 = arr1.concat(arr2,arr3);
// concat方法 不会改变原数组
console.log(arr1,arr4);

//reverse () 方法 用来将一个数组中全部项顺序 倒序

let arr5 = [1,2,3,4,5,6,7,8,9];
arr5.reverse();
console.log(arr5);


// index 方法 的功能是搜索数组中的元素，返回元素的下标，如果元素不存在就返回-1 (=== 包含类型)

let arr6 = ['A','B','C','D','E','B'];
console.log(arr6.indexOf('C'));
console.log(arr6.indexOf('B')); //同样的值，一第一次为止


// include () 方法的功能是判断以个数组是否包含一个指定的值，放回bool值 （===）
console.log(arr6.includes('C'));
console.log(arr6.includes('B'));

console.log([11,22,33].includes('11'));
console.log([11,22,33].indexOf("11"));



// sort 方法

// splice() 方法 用于替换数组中的指定项

let arr7 = ['A','B','C',"D","E","F","G"];

arr7.splice(3,2,"X","Y","Z");

// 3 表示从下标为3的项开始，连续替换掉2项
// splice() 方法第一个项为数组 表示从第几个数开始提花布
// 2 表示替换2个项

console.log(arr7); 
// [
//     'A', 'B', 'C',
//     'X', 'Y', 'Z',
//     'F', 'G'
//   ]

let arr8  =[0,1,2,3,4,5,6,7];
arr8.splice(2,0,44,55,66,77) // 插入新值

console.log(arr8);


// splice（）可以用于删除指定项

let arr9 =['A',"B","C","D","E","F","G"];

let items =arr9.splice(2,4);
console.log(arr9);

// splice 返回值就是被删除的项

console.log(items); // [ 'C', 'D', 'E', 'F' ]

// slice 方法
// slice 方法· 用于得到· 子数组，类似域字符串的slice()方法 slice(a,b)截取的子数组从小标位a的项开始搭配下标为b（但不包括下标为b的项）结束
// slice方法的参数允许为负数，表示数组的倒数第几项

let arr10 = [1,2,3,4,5,6,7,8,9];
let arr11 = arr10.slice(2,4);
console.log(arr11);


let arr12  = ['A',"B","C","D","E","F","G"];
let child_arr= arr12.slice(2,5);
let child_arr2 = arr12.slice(2);
let child_arr3 = arr12.slice(2,-1)
console.log(child_arr); // [ 'C', 'D', 'E' ]
console.log(child_arr2); // [ 'C', 'D', 'E', 'F', 'G' ]
console.log(child_arr3); // [ 'C', 'D', 'E', 'F' ]

// push 在尾部插入新项
// pop 在尾部删除
// unshift 在 头部插入新项
// shift 在头部删除

let arr13 = [1,2,3];
arr13.push(4,5,6);
console.log(arr13); // [1,2,3,4,5,6]

let arr14 = [1,2,3];
let lastItem = arr14.pop();
console.log(arr14); // [1,2]
console.log(lastItem); // 3

let arr15 = [1,2,3];
arr15.unshift(4,5,6);
console.log(arr15); // [4,5,6,1,2,3]

let arr16 = [1,2,3];
let firstItem = arr16.shift();
console.log(arr16); // [2,3]
console.log(firstItem); // 1
