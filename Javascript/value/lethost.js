console.log(foo); // ReferenceError，foo未定义
let foo = "bar";

console.log(baz); // undefined，baz声明前可以访问，但其值为undefined
var baz = "qux";

            

//ReferenceError: Cannot access 'foo' before initialization