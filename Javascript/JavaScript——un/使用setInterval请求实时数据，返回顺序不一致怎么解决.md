场景：

setInterval(function() {
    $.get("/path/to/server", function(data, status) {
        console.log(data);
    });
}, 10000);
上面的程序会每隔10秒向服务器请求一次数据，并在数据到达后存储。这个实现方法通常可以满足简单的需求，然而同时也存在着很大的缺陷：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过10秒，而请求是以10秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致。


答案解析
1、使用setTimeout代替setInterval

程序首先设置10秒后发起请求，当数据返回后再隔10秒发起第二次请求，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。

function poll() {
    setTimeout(function() {
        $.get("/path/to/server", function(data, status) {
            console.log(data);
            // 发起下一次请求
            poll();
        });
    }, 10000);
}

2、WebSocket

WebSocket 协议本质上是一个基于 TCP 的协议。

为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。

服务器（Node.js）：

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on("connection", function(socket) {
    socket.on("message", function(msg) {
        console.log(msg);
        socket.send("Nice to meet you!");
    });
});

客户端同样可以使用Node.js或者是浏览器实现，这里选用浏览器作为客户端：

// WebSocket 为客户端JavaScript的原生对象
var ws = new WebSocket("ws://localhost:8080");
ws.onopen = function (event) {
    ws.send("Hello there!");
}
ws.onmessage = function (event) {
    console.log(event.data);
}
