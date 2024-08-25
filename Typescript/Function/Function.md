学习 TypeScript 的函数类型

TypeScript 是 JavaScript 的一个静态类型超集，通过添加类型注解和其他特性，帮助开发者编写更健壮和可维护的代码。函数是任何应用程序的基本组成部分，TypeScript 提供了多种方式来描述函数如何被调用，包括函数类型表达式、调用签名、构造签名和泛型函数。让我们深入了解这些概念，以便有效地使用 TypeScript 进行函数类型定义。

### 函数类型表达式

函数类型表达式是描述函数的最简单方式。它们的语法类似于箭头函数：

```typescript
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

在这个例子中，`(a: string) => void` 表示“一个带有一个名为 `a` 的 `string` 类型参数且没有返回值的函数”。

### 调用签名

在 JavaScript 中，函数可以有属性，除了可调用之外。要描述一个带有属性的可调用对象，可以在对象类型中写一个调用签名：

```typescript
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

### 构造签名

JavaScript 函数也可以用 `new` 操作符调用。TypeScript 将这些称为构造函数。你可以在调用签名前添加 `new` 关键字来写一个构造签名：

```typescript
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

### 泛型函数

当你想描述两个值之间的对应关系时，可以使用泛型。例如，一个返回数组第一个元素的函数：

```typescript
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(["a", "b", "c"]); // s 是 'string' 类型
const n = firstElement([1, 2, 3]); // n 是 'number' 类型
const u = firstElement([]); // u 是 undefined 类型
```

### 约束

你可以使用约束来限制类型参数可以接受的类型种类：

```typescript
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
```

### 可选参数

在 JavaScript 中，函数经常接受可变数量的参数。你可以在 TypeScript 中通过用 `?` 标记参数为可选来模拟这一点：

```typescript
function f(x?: number) {
  // ...
}

f(); // 可以
f(10); // 可以
```

### 函数重载

TypeScript 允许你通过编写重载签名来指定一个可以用不同方式调用的函数：

```typescript
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
```

### 在函数中声明 `this`

TypeScript 允许你在函数中声明 `this` 的类型：

```typescript
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

### 其他需要了解的类型

- **void**：表示不返回值的函数的返回值。
- **object**：指任何非原始值。
- **unknown**：表示任何值，类似于 `any`，但更安全。
- **never**：表示永远不会被观察到的值，常用于抛出异常的函数。
- **Function**：全局类型 `Function` 描述了所有函数值上的 `bind`、`call`、`apply` 等属性。

### 剩余参数和参数展开

剩余参数允许你定义接受无限数量参数的函数：

```typescript
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
```

### 参数解构

参数解构允许你将作为参数提供的对象解包到函数体中的一个或多个局部变量中：

```typescript
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

### 函数的可赋值性

函数的 `void` 返回类型会产生一些不寻常但预期的行为。具有 `void` 返回类型的上下文函数类型可以返回任何其他值，但会被忽略：

```typescript
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};
```

理解这些概念将帮助你在 TypeScript 中编写更健壮和灵活的函数，使你的代码库更易于维护和理解。