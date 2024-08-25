console.log('first world');

setTimeout(()=>{
    console.log('second hello');
},1000)


console.log('third hello');
// first world
// third hello
// second hello
//  setTimeout是一个异步操作，它将回调函数推入消息队列，而不会阻塞调用栈的执行。调用栈继续执行console.log("third")，然后在1秒后，事件循环将回调函数从消息队列中取出并执行。