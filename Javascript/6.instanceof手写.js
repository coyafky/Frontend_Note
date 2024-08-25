// 自定义 instanceof 操作符
function customInstanceof(obj, constructor) {
    // 获取对象的原型
    let prototype = Object.getPrototypeOf(obj);

    // 循环遍历原型链
    while (prototype !== null) {
        // 如果原型等于构造函数的原型，则返回 true
        if (prototype === constructor.prototype) {
            return true;
        }

        // 获取原型链中的下一个原型
        prototype = Object.getPrototypeOf(prototype);
    }

    // 如果原型链中没有找到构造函数的原型，则返回 false
    return false;
}




// 示例用法
function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
console.log(customInstanceof(person, Person)); // true
console.log(customInstanceof(person, Object)); // true，因为所有对象都是Object的实例
console.log(customInstanceof(person, Array)); // false