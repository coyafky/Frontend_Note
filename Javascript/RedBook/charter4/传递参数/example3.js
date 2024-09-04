function setName(obj){
    obj.name="coco"
    obj = new Object();
    obj.name= "Gred";
}

let person = new Object();
setName(person);
console.log(person.name)

//这个例子前后唯一的变化就是setName()中多了两行代码，将obj重新定 义为一个有着不同name的新对象。当person传入setName()时，其name属 性被设置为"Nicholas"。然后变量obj被设置为一个新对象且name属性被 设置为"Greg"。如果person是按引用传递的，那么person应该自动将指 针改为指向name为"Greg"的对象。可是，当我们再次访问person.name 时，它的值是"Nicholas"，这表明函数中参数的值改变之后，原始的引 用仍然没变。当obj在函数内部被重写时，它变成了一个指向本地对象 的指针。而那个本地对象在函数执行结束时就被销毁了