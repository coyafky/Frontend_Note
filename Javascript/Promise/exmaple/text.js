let p = Promise.resolve(1);
p.then((v) => {
  console.log(v);
  // 创建一个promise并返回
  return new Promise((resolve, reject) => {
    // 引入异步，一样正常工作
    setTimeout(() => {
      resolve(v * 2);
    }, 4);
  });
}).then((v) => {
  // 猜猜拿到了多少？
  console.log(v);
});
