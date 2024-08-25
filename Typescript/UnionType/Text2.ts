function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Unexpected type of padding`);
}

console.log(padLeft("Hello, world", 4)); // 输出: "    Hello, world"
console.log(padLeft("Hello, world", "=> ")); // 输出: "=> Hello, world"
//  当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，只能访问此联合类型的所有类型里共有的属性或 方法。

