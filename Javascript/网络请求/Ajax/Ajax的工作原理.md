1）创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)） 2）判断数据传输方式(GET/POST) 3）打开链接 open() 4）发送 send() 5）当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数


在这个代码示例中，`XMLHttpRequest`对象的`onreadystatechange`事件处理函数用于监听请求的状态变化。让我们详细解析这个函数及其各个部分：

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
    }
}
xhr.send();
```

### 1. `const xhr = new XMLHttpRequest();`
这行代码创建了一个新的`XMLHttpRequest`对象，这是与服务器进行通信的基础。

### 2. `xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');`
这行代码配置了请求：
- `'GET'`：指定请求类型为GET。
- `'https://jsonplaceholder.typicode.com/todos/1'`：指定请求的URL。

### 3. `xhr.onreadystatechange = function() { ... }`
这行代码设置了一个事件处理函数，当`XMLHttpRequest`对象的`readyState`属性发生变化时，这个函数就会被调用。

#### 3.1 `if(xhr.readyState === 4 && xhr.status === 200) { ... }`
在事件处理函数内部，这个`if`语句检查两个条件：
- `xhr.readyState === 4`：表示请求已完成且响应已就绪。
- `xhr.status === 200`：表示请求成功，服务器返回的状态码为200。

#### 3.2 `document.getElementById('content').innerHTML = xhr.responseText;`
如果上述两个条件都满足，这行代码将服务器的响应文本（`xhr.responseText`）设置为ID为`content`的HTML元素的内部内容。

### 4. `xhr.send();`
这行代码发送请求到服务器。

### 总结
- `xhr.open()`：配置请求。
- `xhr.onreadystatechange`：设置一个回调函数，当请求状态变化时调用。
- `xhr.readyState`：表示请求的当前状态。
- `xhr.status`：表示服务器返回的状态码。
- `xhr.responseText`：包含服务器返回的响应文本。
- `xhr.send()`：发送请求。

通过这些步骤，Ajax请求从服务器获取数据并更新网页内容，而不需要重新加载整个页面。

`XMLHttpRequest`（简称`xhr`）方法的调用顺序通常遵循以下步骤：

1. **创建`XMLHttpRequest`对象**：
   ```javascript
   const xhr = new XMLHttpRequest();
   ```

2. **初始化请求**：
   使用`open()`方法配置请求类型、URL以及是否异步处理请求。
   ```javascript
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
   ```

3. **设置回调函数**：
   使用`onreadystatechange`事件处理函数来监听请求状态的变化。
   ```javascript
   xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
           // 处理响应
           document.getElementById('content').innerHTML = xhr.responseText;
       }
   };
   ```

4. **发送请求**：
   使用`send()`方法发送请求到服务器。
   ```javascript
   xhr.send();
   ```

### 详细步骤说明

1. **创建`XMLHttpRequest`对象**：
   这是第一步，创建一个`XMLHttpRequest`对象实例，用于与服务器进行通信。

2. **初始化请求**：
   `open(method, url, async)`方法用于初始化请求：
   - `method`：请求的类型（如`GET`、`POST`）。
   - `url`：请求的URL。
   - `async`：布尔值，指定请求是否异步处理（通常设置为`true`）。

3. **设置回调函数**：
   `onreadystatechange`是一个事件处理函数，当`readyState`属性发生变化时会被调用。`readyState`有以下几个可能的值：
   - `0`：请求未初始化。
   - `1`：服务器连接已建立。
   - `2`：请求已接收。
   - `3`：请求处理中。
   - `4`：请求已完成，且响应已就绪。

   在回调函数中，通常会检查`readyState`是否为`4`（请求完成）以及`status`是否为`200`（成功响应），然后处理响应数据。

4. **发送请求**：
   `send(body)`方法用于发送请求。对于`GET`请求，`body`参数通常为`null`或省略。对于`POST`请求，`body`参数可以包含要发送的数据。

### 示例代码

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('content').innerHTML = xhr.responseText;
    }
};
xhr.send();
```

### 总结

- 创建`XMLHttpRequest`对象。
- 使用`open()`方法初始化请求。
- 设置`onreadystatechange`事件处理函数。
- 使用`send()`方法发送请求。

按照这个顺序调用`xhr`方法，可以实现与服务器的异步通信，并在请求完成后处理响应数据。