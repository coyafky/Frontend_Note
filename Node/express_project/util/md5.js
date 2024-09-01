const crypto = require('crypto');

// 使用模块 加密的功能

// console.log(crypto);

// let d = crypto.createHash('md5').update('123456').digest('hex');
// console.log(d); // e10adc3949ba59abbe56e057f20f883e

module.exports = str=> {
    return crypto.createHash('md5').update('by'+str).digest('hex');
}