// 创建一个Promise对象
const myPromise = new Promise((resolve, reject) => {
    // 获取按钮元素并添加点击事件监听器
    document.getElementById('myButton').addEventListener('click', () => {
      // 在按钮点击时调用resolve方法
      resolve('按钮被点击了！');
    });
  });
  
  // 使用then方法处理Promise的成功回调
  myPromise.then(value => {
    // 更新页面上的结果显示
    document.getElementById('result').textContent = value;
  });