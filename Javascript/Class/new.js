var SuperType = function (name) {
    var nose = 'nose' // 私有属性
    function say () {} // 私有方法
    
    // 特权方法
    this.getName = function () {} 
    this.setName = function () {}
    
    this.mouse = 'mouse' // 对象公有属性
    this.listen = function () {} // 对象公有方法
    
    // 构造器
    this.setName(name)
}

SuperType.age = 10 // 类静态公有属性（对象不能访问）
SuperType.read = function () {} // 类静态公有方法（对象无法访问）

SuperType.prototype = { // 对象赋值（也可以一一赋值）
    isMan: 'true', // 公有属性
    write: function () {} // 公有方法
}

var instance = new SuperType()