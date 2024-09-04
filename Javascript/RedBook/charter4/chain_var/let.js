// let关键字跟var很相似，但它的作用域是块级的，这也 是JavaScript中的新概念。块级作用域由最近的一对包含花括号{}界 定。换句话说，if块、while块、function块，甚至连单独的块也 是let声明变量的作用域

if (true) {
  let a;
}

console.log(a); // ReferenceError: a is not defined

function b() {
  let c;
}

console.log(c);

//   \\{ let d; } console.log(d); // ReferenceError: d没有定义 let与var的另一个不同之处是在同一作用域内不能声明两次。重复 的var声明会被忽略，而重复的let声明会抛出SyntaxError。

var a;
var a; // 不会报错 
// { let b;
//      let b;

//  } // SyntaxError: 无法重新声明范围变量b

//let的行为非常适合在循环中声明迭代变量。


// 量会泄漏到循环外部，这种情况应该避免。来看下面两个例子： 
for (var i = 0; i < 10; ++i) {

} console.log(i); // 10 
for (let j = 0; j < 10; ++j) {} console.log(j); // ReferenceError: j没有定义

