const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const cors = require("cors");

const morgan = require("morgan");
const router = require('./router/index')
// 需要2个中间件 跨域 ，日志记录，数据格式解析

// 数据格式解析（客户端请求）
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); // 在这样之后服务器支持跨域的请求

app.use(morgan('dev')) //在开发模式下记录 日志

app.use('/api/v1', router)



app.listen(PORT, () => {
  console.log(`sever is run at http://localhost:${PORT}`);
});

// 最后针对路由处理不同业务逻辑的处理情况
