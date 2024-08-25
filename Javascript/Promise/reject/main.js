// 创建一个Promise对象
const myPromise = new Promise((resolve, reject) => {
    // 获取按钮元素并添加点击事件监听器
    document.getElementById('myButton').addEventListener('click', () => {
      // 在按钮点击时调用reject方法
      reject('按钮被点击了，但是操作失败了！');
    });
  });
  
  // 使用catch方法处理Promise的失败回调
  myPromise.catch(reason => {
    // 更新页面上的结果显示
    document.getElementById('result').textContent = reason;
  });