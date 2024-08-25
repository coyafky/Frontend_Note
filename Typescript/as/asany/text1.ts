let anyValue: any = 42;

// 我们可以将任何类型的值赋给 anyValue，无论其类型是什么
anyValue = 'Hello, world!';
anyValue = true;

let value: unknown = "Hello, TypeScript!";
let strLength: number = (value as any).length;
console.log(strLength)


function processValue(value: unknown) {
    if (typeof value === 'string') {
        console.log(value.length);
    } else {
        console.log("Value is not a string");
    }
}

processValue("Hello, TypeScript!"); // 输出: 18
processValue(42); // 输出: Value is not a string