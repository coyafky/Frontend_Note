// 符号需要使用Symbol()函数初始化。因为符号本身是原始类型，所 以typeof操作符对符号返回symbol。

let sym = Symbol();

console.log(typeof sym); // symbol

// 可以传入一个字符串参数作为对符号的描 述（description），将来可以通过这个字符串来调试代码。但是， 这个字符串参数与符号定义或标识完全无关：
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
let fooSymbol = Symbol("foo");
let otherFooSymbol = Symbol("foo");
console.log(genericSymbol == otherGenericSymbol); // false console.log(fooSymbol == otherFooSymbol); // false

// S