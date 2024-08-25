// 创建多个Promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000);
  });
  
  // 获取按钮元素并添加点击事件监听器
  document.getElementById('myButton').addEventListener('click', () => {
    // 使用Promise.all等待所有Promise完成
    Promise.all([promise1, promise2, promise3])
      .then(values => {
        // 更新页面上的结果显示
        document.getElementById('result').textContent = `所有Promise已完成，结果是：${values.join(', ')}`;
      })
      .catch(reason => {
        // 处理Promise被拒绝的情况
        document.getElementById('result').textContent = `执行Promise.all时发生错误：${reason}`;
      });
  });