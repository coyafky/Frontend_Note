function addTen(num){
    num+=10;
    return num;

}

let count =20;
let result = addTen(count);
console.log(count);
console.log(result);

//函数addTen()有一个参数num，它其实是一个局部变量。在调用时，变量count作为参数传入。count的值是20，这个值被复制到参 数num以便在addTen()内部使用。在函数内部，参数num的值被加上了 10，但这不会影响函数外部的原始变量count。参数num和变量count互不干扰，它们只不过碰巧保存了一样的值。如果num是按引用传递的， 那么count的值也会被修改为30。这个事实在使用数值这样的原始值时 是非常明显的

