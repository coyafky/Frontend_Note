const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
// 设置静态文件目录
app.use(express.static('public'));

// 处理文件上传的逻辑
app.post('/upload', (req, res) => {
    // 处理文件上传逻辑
    // 保存文件到服务器指定目录
    res.send('文件上传成功');
});

// 处理文件下载的逻辑
app.get('/download/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', fileName);
    res.download(filePath);
});

// 启动服务器
app.listen(port, () => {
    console.log('服务器运行在 http://localhost:3000');
});

