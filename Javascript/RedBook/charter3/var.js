var message ="hi";
message ="coya";
console.log(message);

// var声明作用域
// 使用var操作符定义的变量会成为包含它的函数的局部变量

function text(){
    var message ="hi";
    console.log(message);
}
text();
// console.log(message);出错 message is not defined
// 函数text 创建这个变量后赋值，这个函数完成后（调用）后，变量也被销毁

// 忽略var操作符

function text2(){
    message ="hi";
    console.log(message); 
}

text2();
console.log(message);

// var 声明提升

// 这段代码没有报错的原因是这个关键字声明的变量自动提升到函数作用域顶部？
function foo(){
    console.log(age); //
    var age =26;
    
}

foo() // undefined



