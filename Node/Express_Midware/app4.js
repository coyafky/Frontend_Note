const express = require('express');
const app = express();

// 匹配以 "/product" 开头，后面跟随一个或多个数字的路径
app.get('/product/:id(\\d+)', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});