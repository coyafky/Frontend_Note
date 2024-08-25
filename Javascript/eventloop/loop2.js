console.log('主线程开始');

setTimeout(function(){
    console.log('setTimeout线程完成');
},1000)

console.log('主线程结束');

// 主线程开始
// 主线程结束
// setTimeout线程完成
// 上述代码的过程，首先同步执行整个代码，输出主线程开始！，接着遇到setTimeout，交给定时器线程处理，此时并不会等待结果，而是继续同步运行，输出主线程结束！，此时setTimout的回调函数已经被放在任务队列中了（准确说是10ms之后），将回调函数从任务队列中取出来，在主线程中运行，输出setTimeout完成！
