const { error } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const {promisfy} = require('util');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
app.use(express.urlencoded())
app.use(express.json())
// app.get("/", (req, res) => {
//   fs.readFile("./db.json", "utf-8", (err, data) => {
//     if (!err) {
//       let back = JSON.parse(data);
//       res.send(back.users);
//     } else {
//       console.log("读取失败");
//       res.status(500).json({ err });
//     }
//   });
// });

// app.get("/", (req, res) => {
//     readFile("./db.json", "utf-8", (err, data) => {
//         if (!err) {
//             let back = JSON.parse(data);
//             res.send(back.users);
//         } else {
//             console.log("读取失败");
//             res.status(500).json({ err });
//         }
//     });
// });

app.get("/", async function (req,res) {
    try {
        let data = await readFile('./db.json','utf-8')
        let back = JSON.parse(data)
        res.send(back.users)
    } catch (error) {
        console.log('读取失败');
        res.status(500).json({ error });
    }
})

app.post ('/' ,async (req,res)=>{
    // console.log(req.body);
    console.log(req.headers); //   'content-type': 'application/x-www-form-urlencoded',
    console.log(req.body); // { username: 'coya', age: '20' }
    // { user: 'lisi' }
    let body = req.body;
    if(!body) {
        res.status(403).json({
            error: '缺少用户信息'
        })
    }
    // 获取到现有的id ,再加1
    let data = await readFile('./db.json', 'utf-8');
    let back = JSON.parse(data);
    let id = back.users[back.users.length - 1].id + 1
    body.id = id
    console.log(body); // { user: 'lisi', age: 18, id: 3 }
    // 使用文件写入的方法
    back.users.push(body)
    try{
        let w =writeFile('./db.json', JSON.stringify(back))
        if(!w) {
           res.status(200).json({ error });
        }
    }catch (error) {
        console.log('写入失败');
        res.status(500).json({ error });
    }
    res.send(body)
    

    
})
// 接收时要判断是 发送的那种类型的数据？

app.listen(3000, () => {
  console.log("http://localhost:3000");

  console.log("服务已经启动, 端口 3000 正在监听中....");
});

// 添加用户到db.json中
