

简答题fetch 请求方式


Fetch API 是近年来被提及将要取代XHR的技术新标准，是一个 HTML5 的 API。 Fetch 并不是XHR的升级版本，而是从一个全新的角度来思考的一种设计。

Fetch 是基于 Promise 语法结构，而且它的设计足够低阶，这表示它可以在实际需求中进行更多的弹性设计。对于XHR所提供的能力来说，Fetch 已经足够取代XHR，并且提供了更多拓展的可能性。

// 获取 some.json 资源 
```js

// 获取 some.json 资源 
fetch('some.json') 
 .then(function(response) { 
    return response.json(); 
 }) 
 .then(function(data) { 
    console.log('data', data); 
 }) 
 .catch(function(error) { 
    console.log('Fetch Error: ', error); 
 }); 
 
// 采用ES2016的 async/await 语法 
async function() { 
 try { 
    const response = await fetch('some.json'); 
    const data = response.json(); 
    console.log('data', data); 
 } catch (error) { 
    console.log('Fetch Error: ', error) 
 } 
}
```



**fetch.Post请求**

```js
fetch('https://www.api.com/api/xxx', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'a=1&b=2',
}).then(resp => resp.json()).then(resp => {
    console.log(resp)
});
```



**fetch.Get请求**

```js
fetch('https://www.api.com/api/xxx?location=北京&key=bc08513d63c749aab3761f77d74fe820',{
    method:'GET'
}) // 返回一个Promise对象
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res) // res是最终的结果
})
```





fetch请求网页

```js
fetch('https://www.api.com/api/xxx')
    .then(response => response.text())
    .then(data => console.log(data));
```





自定义header



```js
var headers = new Headers({
    "Content-Type": "text/plain",
    "X-Custom-Header": "aaabbbccc",
});

var formData = new FormData();
formData.append('name', 'lxa');
formData.append('file', someFile);

var config = {
    credentials: 'include', // 支持cookie
    headers: headers, // 自定义头部
    method: 'POST', // post方式请求
    body: formData // post请求携带的内容
};

fetch('https://www.api.com/api/xxx', config)
    .then(response => response.json())
    .then(data => console.log(data));

// 或者这样添加头部
var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

```





**fetch其他参数**

- method: 请求的方法，例如：GET,POST。
- headers: 请求头部信息，可以是一个简单的对象，也可以是 Headers 类实例化的一个对象。
- body: 需要发送的信息内容，可以是Blob,BufferSource,FormData,URLSearchParams或者USVString。注意，GET,HEAD方法不能包含body。
- mode: 请求模式，分别有cors,no-cors,same-origin,navigate这几个可选值。
  - cors: 允许跨域，要求响应中Acess-Control-Allow-Origin这样的头部表示允许跨域。
  - no-cors: 只允许使用HEAD,GET,POST方法。
  - same-origin: 只允许同源请求，否则直接报错。
  - navigate: 支持页面导航。
- credentials: 表示是否发送cookie，有三个选项
  - omit: 不发送cookie。
  - same-origin: 仅在同源时发送cookie。
  - include: 发送cookie。
- cache: 表示处理缓存的策略。
- redirect: 表示发生重定向时，有三个选项
  - follow: 跟随。
  - error: 发生错误。
  - manual: 需要用户手动跟随。
- integrity: 包含一个用于验证资资源完整性的字符



```js
var URL = 'https://www.api.com/api/xxx';  
// 实例化 Headers  
var headers = new Headers({  
    "Content-Type": "text/plain",  
    "Content-Length": content.length.toString(),  
    "X-Custom-Header": "ProcessThisImmediately",  
});  
var getReq = new Request(URL, {method: 'GET', headers: headers });  
fetch(getReq).then(function(response) {  
    return response.json();  
}).catch(function(error) {  
    console.log('Fetch Error: ', error);  
});

```

