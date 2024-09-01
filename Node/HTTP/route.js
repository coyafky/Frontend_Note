let fs = require('fs');
let url = require('url');
let controller = require('./controller')
module.exports =(req,res)=>{
    console.log(req.url);
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // res.write ('<h1>你好</h1>')

    // res.end('hello world')
    console.log(req.method);
    if(req.url === '/') {
  
    
       controller.index(res)
    }else{
        fs.readFile('./serverText.jpeg',function(err, data) {
            if(err) {
                console.log('读取失败');
                return;
            }
            res.end(data);
        })
    }
    

}