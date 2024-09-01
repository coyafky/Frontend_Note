//  迭代器”的概念有时候容易模糊，因为它可以指通用的迭代，也可以指 接口，还可以指正式的迭代器类型。下面的例子比较了一个显式的迭代 器实现和一个原生的迭代器实现。

// 这个类实现了可迭代接口（Iterable）
// 调用默认的迭代器工厂函数会返回
// 一个实现迭代器接口（Iterator）的迭代器对象
class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return { done: false, value: 'foo' };
      }
    };
  }
}

let f = new Foo();
// 打印出实现了迭代器接口的对象
console.log(f[Symbol.iterator]()); // { next: f() {} }

// Array类型实现了可迭代接口（Iterable）
// 调用Array类型的默认迭代器工厂函数
// 会创建一个ArrayIterator的实例
let a = new Array();
// 打印出ArrayIterator的实例
console.log(a[Symbol.iterator]()); // Array Iterator {}
