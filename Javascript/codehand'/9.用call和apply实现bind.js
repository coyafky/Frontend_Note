Function.prototype.customBind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

// 验证样例
function greet(greeting) {
    console.log(greeting + ' ' + this.name);
}

const person = { name: 'Alice' };

const boundGreet = greet.customBind(person, 'Hello');
boundGreet(); // 输出: Hello Alice