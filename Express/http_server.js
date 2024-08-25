const http = require("http");

const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { "Content-Type": "text/plain" });
  // 发送响应数据
  res.end("Hello World!\n");
});

// 监听端口
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});