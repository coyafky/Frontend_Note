// 手写forEach
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// 手写map
Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}

// 手写filter
Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

// 手写reduce
Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

// 验证样例
const numbers = [1, 2, 3, 4, 5];

// 测试forEach
numbers.customForEach(num => console.log(num * 2));

// 测试map
const doubledNumbers = numbers.customMap(num => num * 2);
console.log(doubledNumbers);

// 测试filter
const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log(evenNumbers);

// 测试reduce
const sum = numbers.customReduce((acc, curr) => acc + curr, 0);
console.log(sum);