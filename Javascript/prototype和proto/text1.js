function Text(){
    this.a=1
}
// console.log(Text.prototype); // {}

// Text.prototype.b=2;

// Object.prototype.c=3;


// const text= new Text()
// console.log(text.__proto__); // {}

// console.log(Text.prototype === text.__proto__); // true

// console.log(Text.prototype.__proto__);// [Object: null prototype] {}
// console.log(Text.prototype.__proto__=== Object.prototype); // true

// console.log(Object.prototype.__proto__ === null); // true

// console.log(text);

// // 可以通过 test 来访问到 a，b，c

// console.log(text.a);//1
// console.log(text.b);//2
// console.log(text.c); //3

console.log(Text.__proto__ === Function.prototype); // true
console.log(Function.prototype);
console.log(Function.__proto__===Function.prototype); // true

console.log(typeof Object);
console.log(Object.__proto__===Function.prototype); // true
console.log(Object.__proto__=== Function.__proto__); // true
console.log(Object.__proto__===Object.prototype); //false
