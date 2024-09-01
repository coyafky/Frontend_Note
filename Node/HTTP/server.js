// 导入HTTP 莫夸
let router = require('./route')
let http = require('http');

// 创建服务器

let server = http.createServer()
const fs = require('fs');
server.listen(3000, () => {
    console.log('http://localhost:3000');
    
    console.log('服务器启动成功');
})

server.on('request', (req, res) => {
  router()
})
