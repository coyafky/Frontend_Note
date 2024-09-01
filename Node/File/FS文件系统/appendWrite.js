const  fs = require ('fs');

fs.appendFile('../File/text.txt', 'coya is a des', err => {
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})