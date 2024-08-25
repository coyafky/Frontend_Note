// 在交集中，unknown 吸收所有类型
type T00 = unknown & null; // null
type T01 = unknown & undefined; // undefined
type T02 = unknown & null & undefined; // null & undefined (变成 never)
type T03 = unknown & string; // string
type T04 = unknown & string[]; // string[]
type T05 = unknown & unknown; // unknown
type T06 = unknown & any; // any

// 在联合类型中，unknown 吸收所有类型
type T10 = unknown | null; // unknown
type T11 = unknown | undefined; // unknown
type T12 = unknown | null | undefined; // unknown
type T13 = unknown | string; // unknown
type T14 = unknown | string[]; // unknown
type T15 = unknown | unknown; // unknown
type T16 = unknown | any; // any

// 类型变量和 unknown 在联合和交集中的关系
type T20<T> = T & {}; // T & {}
type T21<T> = T | {}; // T | {}
type T22<T> = T & unknown; // T
type T23<T> = T | unknown; // unknown

// unknown 在条件类型中的表现
type T30<T> = unknown extends T ? true : false; // 延迟求值
type T31<T> = T extends unknown ? true : false; // 延迟求值（分布式条件类型）
type T32<T> = never extends T ? true : false; // true
type T33<T> = T extends never ? true : false; // 延迟求值

// keyof unknown
type T40 = keyof any; // string | number | symbol
type T41 = keyof unknown; // never

// 只允许对 unknown 使用相等运算符
function f10(x: unknown) {
  x == 5;
  x !== 10;
  x >= 0; // 错误
  x + 1; // 错误
  x * 2; // 错误
  -x; // 错误
  +x; // 错误
}

// 不允许属性访问、元素访问或函数调用
function f11(x: unknown) {
  x.foo; // 错误
  x[5]; // 错误
  x(); // 错误
  new x(); // 错误
}

// typeof、instanceof 和用户定义的类型谓词
declare function isFunction(x: unknown): x is Function;
function f20(x: unknown) {
  if (typeof x === "string" || typeof x === "number") {
    x; // string | number
  }
  if (x instanceof Error) {
    x; // Error
  }
  if (isFunction(x)) {
    x; // Function
  }
}

// 在 unknown 上的同态映射类型
type T50<T> = { [P in keyof T]: number };
type T51 = T50<any>; // { [x: string]: number }
type T52 = T50<unknown>; // {}

// 任何类型都可以赋值给 unknown
function f21<T>(pAny: any, pNever: never, pT: T) {
  let x: unknown;
  x = 123;
  x = "hello";
  x = [1, 2, 3];
  x = new Error();
  x = x;
  x = pAny;
  x = pNever;
  x = pT;
}

// unknown 只能赋值给自身和 any
function f22(x: unknown) {
  let v1: any = x;
  let v2: unknown = x;
  let v3: object = x; // 错误
  let v4: string = x; // 错误
  let v5: string[] = x; // 错误
  let v6: {} = x; // 错误
  let v7: {} | null | undefined = x; // 错误
}

// 类型参数 'T extends unknown' 与 object 无关
function f23<T extends unknown>(x: T) {
  let y: object = x; // 错误
}

// 除了基本类型之外的任何类型都可以赋值给 { [x: string]: unknown }
function f24(x: { [x: string]: unknown }) {
  x = {};
  x = { a: 5 };
  x = [1, 2, 3];
  x = 123; // 错误
}

// 类型为 unknown 的局部变量总是被认为是已初始化的
function f25() {
  let x: unknown;
  let y = x;
}

// unknown 的展开导致结果为 unknown
function f26(x: {}, y: unknown, z: any) {
  let o1 = { a: 42, ...x }; // { a: number }
  let o2 = { a: 42, ...x, ...y }; // unknown
  let o3 = { a: 42, ...x, ...y, ...z }; // any
}

// 返回类型为 unknown 的函数不需要返回表达式
function f27(): unknown {}

// 不能从 unknown 创建剩余类型
function f28(x: unknown) {
  let { ...a } = x; // 错误
}

// 类型为 unknown 的类属性不需要确定赋值
class C1 {
  a: string; // 错误
  b: unknown;
  c: any;
}


// unknown 是 any 的类型安全对应物。
// 任何类型都可以赋值给 unknown，但 unknown 只能赋值给 unknown 和 any。
// 在断言或缩小到更具体的类型之前，不允许对 unknown 进行任何操作。
// unknown 在交集中吸收所有类型，在联合类型中被所有类型吸收。
// keyof unknown 是 never。
// 只允许对 unknown 使用相等运算符。
// 不允许对 unknown 进行属性访问、元素访问或函数调用。
// 类型为 unknown 的局部变量总是被认为是已初始化的。
// unknown 的展开导致结果为 unknown。
// 返回类型为 unknown 的函数不需要返回表达式。
// 不能从 unknown 创建剩余类型。
// 类型为 unknown 的类属性不需要确定赋值。