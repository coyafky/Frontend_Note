//Promise封装一个delay函数

// 封装一个 delay 函数，返回一个 Promise 对象
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
// 使用封装的 delay 函数延迟 1 秒
delay(1000)
  .then(() => {
    // 延迟 1 秒后执行的代码
    console.log('延迟 1 秒后执行');
  });

  