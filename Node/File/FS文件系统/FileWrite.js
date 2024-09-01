let fs = require  ('fs')

fs.writeFile('../File/text.txt', 'hello coya', err => {
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})