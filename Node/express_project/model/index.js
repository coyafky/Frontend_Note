const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/express-video'); // 链接是异步的也要加入await

}
// 得到的是异步的返回值，需要 .then 方式获取到数据的反馈

main().then(res=>{
    console.log('mongo链接成功')
}).catch(err=>{
    console.log(err)
    console.log('mongo链接失败');
    
})

module.exports ={
    User:mongoose.model('User',require('./userModel'))
    // 如果加入到其他模型，再在这里导出
}
