const fs = require('fs');

const  path = require('path');

// fs.writeFileSync (__dirname+'/index.html','love');
// console.log(__dirname+'/index.html'); // /Users/mc/Documents/code/Front_end_ALL/Node/Path/index.html


console.log(path.resolve(__dirname, './index.html'));
console.log(path.resolve(__dirname, 'index.html'));
console.log(path.resolve(__dirname, '/index.html', './test'));

console.log(__filename); // 文件的绝对路径