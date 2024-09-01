const fs = require('fs');

const process = require('process');

// // 第一种的 readFile 读取文件内容再写入文件

// let  data  = fs.readFileSync('./text.txt', 'utf-8');
// fs.writeFileSync('./text2.txt', data);
// console.log(process.memoryUsage);

// liushi 操作
const rs =  fs.createReadStream('./text.txt');
const ws =  fs.createWriteStream('./text3.txt');

rs.pipe(ws)