// 创建多个Promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Promise 2 rejected'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });
  
  // 获取按钮元素并添加点击事件监听器
  document.getElementById('myButton').addEventListener('click', () => {
    // 使用Promise.race等待任何一个Promise完成
    Promise.race([promise1, promise2, promise3])
      .then(value => {
        // 更新页面上的结果显示
        document.getElementById('result').textContent = `第一个完成的Promise是：${value}`;
      })
      .catch(reason => {
        // 处理Promise被拒绝的情况
        document.getElementById('result').textContent = `第一个完成的Promise被拒绝，原因是：${reason}`;
      });
  });