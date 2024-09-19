// curry函数
function curry(func) {
    // 返回一个柯里化函数
    return function curried(...args) {
        // 如果参数个数达到原始函数的参数个数
        if (args.length >= func.length) {
            // 调用原始函数并返回结果
            return func.apply(this, args);
        } else {
            // 如果参数个数不足
            // 返回一个新的柯里化函数，将当前参数与后续参数合并
            return function(...args2) {
                // 将当前参数与后续参数合并
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

// 定义一个求和函数
const sum = (a, b, c) => a + b + c;

// 将求和函数咖喱化
const curriedSum = curry(sum);

// 使用柯里化函数求和
const result = curriedSum(1)(2)(3); // 6
console.log(result);