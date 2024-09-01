// 导入HTTP 莫夸

let http = require('http');

// 创建服务器

let server = http.createServer()
const  url = require('url') // 处理请求的url路径上的信息
const fs = require('fs');
server.listen(3000, () => {
    console.log('http://localhost:3000');
    
    console.log('服务器启动成功');
})

server.on('request', (req, res) => {
    console.log(req.url);
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // res.write ('<h1>你好</h1>')

    // res.end('hello world')

    // 请求头传参
    console.log(req.method);
    if(req.method === 'GET') {
        console.log(url.parse(req.url,true).query.id);
        // 得到   query: 'id=123',
        if(req.url === '/') {
  
    
            fs.readFile('./index.html','utf-8',(err, data) => {
                if(err) {
                    console.log('读取失败');
                    return;
                }
                res.end(data);
            })
        }else{
            fs.readFile('./serverText.jpeg',function(err, data) {
                if(err) {
                    console.log('读取失败');
                    return;
                }
                res.end(data);
            })
        }
    }else if(req.method ==='POST'){
        console.log('POST请求');
        // POST中的数据是放在请求体中，无法通过url模块获取到
        // 使用net模块处理？
        let data;
        req.on('data' ,function(d){
            console.log(d); // <Buffer 75 73 65 72 6e 61 6d 65 3d 6c 69 73 69 26 61 67 65 3d 31 38>
            // 需要拿到全部的数据，进行处理
            data+=d
            console.log(d.toString()); // username=11&age=22

        })
        req.on('end',function(){
            
           console.log(  require('querystring').parse(data)); // [Object: null prototype] { undefinedusername: 'lisi', age: '18' }
           
        })
        res.end();
    }
    // 单独获取123存在麻烦？

})
