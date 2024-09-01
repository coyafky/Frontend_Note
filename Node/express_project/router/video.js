const express = require('express');

const videoController = require('../controller/videoController');
// 设置路由前缀


const router = express.Router();
router.get('/list',videoController.list);

router.get('/users',(req,res,next)=>{
    console.log(req.method);
    res.send('/users')
    
})

module.exports= router