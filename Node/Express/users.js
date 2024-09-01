// app.js
const express = require('express');
const app = express();
const { getUsers, addUser , updateUser} = require('./Controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', getUsers);
app.post('/', addUser);
app.put('/users/:id', updateUser); // 添加修改用户的路由
app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('服务已经启动, 端口 3000 正在监听中....');
});