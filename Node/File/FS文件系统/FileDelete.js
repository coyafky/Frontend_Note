const fs = require('fs');


fs.unlink('./text3.txt', err => {
    if(err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})

fs.rm('./text2.txt',err=>{
    if(err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
})