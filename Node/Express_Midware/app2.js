const express = require('express');
const app = express();

// 匹配以 "/user" 开头的路径
app.get(/^\/user/, (req, res) => {
  res.send('User route');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});