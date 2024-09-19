function customNew(constructor, ...args) {
    // 创建一个新对象，该对象的原型指向构造函数的原型
    const obj = Object.create(constructor.prototype);
    
    // 调用构造函数，并将新对象作为上下文
    const result = constructor.apply(obj, args);
    
    // 如果构造函数返回的是对象，则返回该对象；否则返回新创建的对象
    return result instanceof Object ? result : obj;
}

// 示例用法
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
};

const person = customNew(Person, 'Alice');
person.sayHello(); // Output: Hello, my name is Alice