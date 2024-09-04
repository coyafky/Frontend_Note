
// 期约并非一开始就必须处于待定状态，然后通过执行器函数才能转 换为落定状态。通过调用Promise.resolve()静态方法，可以实例化 一个解决的期约。下面两个期约实例实际上是一样的
let p1 = new Promise ((resolve,reject)=>{
    resolve()
})

let p2 = Promise.resolve();

// 个解决的期约的值对应着传给Promise.resolve()的第一个参数。 使用这个静态方法，实际上可以把任何值都转换为一个期约：

setTimeout(console.log, 0, Promise.resolve());
setTimeout(console.log, 0, Promise.resolve(3));
setTimeout(console.log, 0, Promise.resolve({}));
// 多余的参数会忽略 
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));

// 这个静态方法而言，如果传入的参数本身是一个期约，那它的行 为就类似于一个空包装。因此，Promise.resolve()可以说是一个幂 等方法

let p = Promise.resolve(7);
 setTimeout(console.log, 0, p === Promise.resolve(p));
 setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));

//  幂等性会保留传入期约的状态3
 let p3 = new Promise(() => {});
  setTimeout(console.log, 0, p3); // Promise <pending> 
 setTimeout(console.log, 0, Promise.resolve(p3)); // Promise <pending> 
 setTimeout(console.log, 0, p === Promise.resolve(p3)); // true

// 这个静态方法能够包装任何非期约值，包括错误对象，并将 其转换为解决的期约。因此，也可能导致不符合预期的行为
let p4 = Promise.resolve(new Error('foo')); 
setTimeout(console.log, 0, p4); // Promise <resolved>: Error: foo