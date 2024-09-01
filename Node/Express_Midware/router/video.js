const express = require('express');

// 设置路由前缀

const router = express.Router();
router.get('/list',(req,res,next)=>{
console.log(req.method);
// JSON.parse('(')
res.send('/video-list')

})

router.get('/users',(req,res,next)=>{
    console.log(req.method);
    res.send('/users')
    
})

module.exports= router