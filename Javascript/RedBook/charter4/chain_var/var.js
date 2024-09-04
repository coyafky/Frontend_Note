// 在使用var声明变量时，变量会被自动添加到最接近的上下文。在 函数中，最接近的上下文就是函数的局部上下文。在with语句中， 最接近的上下文也是函数上下文。如果变量未经声明就被初始化了，那么它就会自动被添加到全局上下文

function add(num1,num2){
    var sum = num1+num2;
    return sum;

}

let result = add(10,20);

// console.log(sum); 错误 ，sum在这款不是有效变量

console.log(result);




// var声明会被拿到函数或全局作用域的顶部，位于作用域中所有代 码之前。这个现象叫作“提升”（hoisting）

var name ='jake';

// 等价于

name ='Jack'
var name;


// 等价的函数
function fn1(){
    var name ="Jake"
}


function fm2(){
    var name;
    name:"Jake"

}