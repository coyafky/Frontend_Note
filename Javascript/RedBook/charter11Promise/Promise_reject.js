//  Promise.reject() 与Promise.resolve()类似，Promise.reject()会实例化一个拒绝的 期约并抛出一个异步错误（这个错误不能通过try/catch捕获，而只 能通过拒绝处理程序捕获）。下面的两个期约实例实际上是一样 的：

let p1 = new Promise ((resolve,reject)=>{
    reject()
})

let p2 = Promise.reject();

// 绝的期约的理由就是传给Promise.reject()的第一个参数。 这个参数也会传给后续的拒绝处理程序

let p3 = Promise.reject(3);
setTimeout(console.log, 0, p3); // Promise <rejected>: 3

p3.then(null, (e) => setTimeout(console.log, 0, e)); // 3

// Promise.reject()并没有照搬Promise.resolve()的幂等 逻辑。如果给它传一个期约对象，则这个期约会成为它返回的拒绝 期约的理由：

setTimeout(console.log, 0, Promise.reject(Promise.resolve())); // 


//同步/异步执行的二元性

