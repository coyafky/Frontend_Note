// 封装一个 Ajax 函数，返回一个 Promise 对象
function ajax(url, options = {}) {
    return new Promise((resolve, reject) => {
      // 创建一个 XMLHttpRequest 对象
      const xhr = new XMLHttpRequest();
  
      // 设置请求参数
      xhr.open(options.method || 'GET', url);
      xhr.setRequestHeader('Content-Type', options.contentType || 'application/json');
  
      // 监听服务器响应
      xhr.onload = () => {
        // 请求成功
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          // 请求失败
          reject(new Error(xhr.statusText));
        }
      };
  
      // 监听网络错误
      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };
  
      // 发送请求
      xhr.send(options.data);
    });
  }
  