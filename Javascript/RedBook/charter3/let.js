// let 和 var 差不多 核心区别是 let是块作用域 ，var 是 函数作用域

// if(true){
//     var name ="cpcp";
//     console.log(name);
// }

// console.log(name);


// if(true){
//     let age =26;
//     console.log(age);
    
// }

// console.log(age);  // ReferenceError: age is not defined

// // let cc = 1;
// // let cc =2;

// let coco ;
// var coco 

{
    let cc = 1;
    console.log(cc); // 输出 1
}

{
    let cc = 2;
    console.log(cc); // 输出 2
}

var name ="cpcp";
console.log(name);

if(true){
    var name= "coco";
    console.log(name);
}

let age =30;
console.log(age);
if(true){
    let age =26;
    console.log(age);
    
}

// 暂时性死区

// let 和 var 区别2 是 let声明的变量不会在作用域中提升

console.log(name);
var name ="matt"

// console.log(aa); // ReferenceError: Cannot access 'aa' before initialization
// let aa ='co'


// let 在全局作用域中的声明的变量不会变成window的属性（var 声明变量就会）