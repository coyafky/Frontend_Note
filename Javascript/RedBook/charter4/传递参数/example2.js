
function setName(obj){
    obj.name="coco"
}

let person = new Object();
setName(person);
console.log(person.name) // "coco"

//我们创建了一个对象并把它保存在变量person中。然后，这个 对象被传给setName()方法，并被复制到参数obj中。在函数内部，obj和 person都指向同一个对象

// obj也会通过引用访问对象。当函数内部给obj设置了name属性时， 函数外部的对象也会反映这个变化，因为obj指向的对象保存在全局作 用域的堆内存上。很多开发者错误地认为，当在局部作用域中修改对象 而变化反映到全局时，就意味着参数是按引用传递的。为证明对象是按 值传递的