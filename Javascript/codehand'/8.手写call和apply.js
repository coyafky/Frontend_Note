// 手写call方法
Function.prototype.customCall = function(context, ...args) {
    context = context || window;
    const key = Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
}

// 手写apply方法
Function.prototype.customApply = function(context, args) {
    context = context || window;
    const key = Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
}

// 验证样例
function greet(greeting) {
    console.log(greeting + ' ' + this.name);
}

const person = { name: 'Alice' };

greet.customCall(person, 'Hello'); // 输出: Hello Alice
greet.customApply(person, ['Hi']); // 输出: Hi Alice