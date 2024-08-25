普通版

function sleep(sleepTime) {
    for(var start = new Date; new Date - start <= sleepTime;) {}
}
var t1 = +new Date()
sleep(3000)
var t2 = +new Date()
console.log(t2 - t1)

优点：简单粗暴，通俗易懂。

缺点：这是最简单粗暴的实现，确实 sleep 了，也确实卡死了，CPU 会飙升，无论你的服务器 CPU 有多么 Niubility。

Promise 版本

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

const t1 = +new Date()
sleep(3000).then(() => {
  const t2 = +new Date()
  console.log(t2 - t1)
})

优点：这种方式实际上是用了 setTimeout，没有形成进程阻塞，不会造成性能和负载问题。
缺点：虽然不像 callback 套那么多层，但仍不怎么美观，而且当我们需要在某过程中需要停止执行（或者在中途返回了错误的值），还必须得层层判断后跳出，非常麻烦，而且这种异步并不是那么彻底，还是看起来别扭
Async/Await 版本

function sleep(delay) {
  return new Promise(reslove => {
    setTimeout(reslove, delay)
  })
}

!async function test() {
  const t1 = +new Date()
  await sleep(3000)
  const t2 = +new Date()
  console.log(t2 - t1)
}()

缺点： ES7 语法存在兼容性问题，有 babel 一切兼容性都不是问题

更优雅的写法

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// 用法
sleep(500).then(() => {
    // 这里写sleep之后需要去做的事情
})

不要忘了开源的力量

const sleep = require("sleep")
const t1 = +new Date()
sleep.msleep(3000)
const t2 = +new Date()
console.log(t2 - t1)

优点：能够实现更加精细的时间精确度，而且看起来就是真的 sleep 函数，清晰直白。