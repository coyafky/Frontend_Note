const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const router = require('./router/index')
const router_video = require('./router/video')
// app.use ((req,res,next)=>{}) 最基本的中间件的方式

// 限定请求方法的中间件

// app.get('/user',(req,res,next)=>{})
// app.post('/user',(req,res,next)=>{})

// app.get(
//   "/user",
//   (req, res, next) => {
//     console.log(req.method);
//     next();
//   },
//   function (req, res, next) {
//     console.log("我是第二个中间件");
//     next();
//   }
  
// );

// 路由级别的中间件
// 引入express 得到实例化对象，实例化对象的set ,能力 ，提供了 路由的方法

// const router =express.Router() // 得到路由对象

// router.get('/user',(req,res,next)=>{
//     console.log(req.method);
//     next();
//     // 使用的最大方便，把路由匹配规则，拆分到具体的魔铠是哟

// })
app.use(router);

app.use(router_video)
// 对这个路由的组件进行 挂载

// 设置路由前缀

// 使用中间件处理 404的情况
app.use((req, res, next) => {
    res.status(404).send('404 Not found') // 404 Not found
})

app.listen(PORT, () => {
  console.log(`sever is run at http://localhost:${PORT}`);
});

// 错误处理的周年积极

// 4个参数，代表错误处理
app.use((err,req,res,next)=>{
    console.log(err);
    // 对客户端进行提醒
    res.status(500).send('500 Internal Server Error')
    
})