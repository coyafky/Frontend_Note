const express = require('express');
const app = express();

// 匹配格式为 "/item/数字" 的路径
app.get(/^\/item\/\d+$/, (req, res) => {
  res.send('Item route');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});