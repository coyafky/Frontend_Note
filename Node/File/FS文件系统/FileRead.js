let  fs  = require ('fs');  // 模块引入导入对应的字符串
// console.log(fs);


fs.readFile('../File/text.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('读取失败');
        return;
    }
    console.log(data);
})

