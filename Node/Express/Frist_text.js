const  express = require('express');
const app = express();

app.get(/^\/(home)?$/, (req, res) => {
    res.end('hello express');
});

app.listen(3000, () => {
    console.log('服务器启动成功');
    console.log('http://localhost:3000');
    
})