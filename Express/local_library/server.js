const express = require('express');
const app = express();

// 使用中间件解析请求体
app.use(express.json());

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = req.query.q;
  res.status(200).send(`User ID: ${userId}, Query: ${query}`);
});

app.post('/user', (req, res) => {
  const userData = req.body;
  res.status(201).json(userData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});