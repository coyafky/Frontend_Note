const express = require('express');

const app = express();



app.get('/home', (req, res) => {
    res.end('hello express');
});

app.get('/', (req, res) => {
    res.end('hello home');
})

app.post('./login', (req, res) => {
    res.end('hello login');
})

app.all('/test', (req, res) => {
    res.end('hello test');
})

app.all('*', (req, res) => {
    res.end('404 not Found')
  });

  app.listen(3000, () => {
    console.log('服务已经启动, 端口 3000 正在监听中....')
  })
  