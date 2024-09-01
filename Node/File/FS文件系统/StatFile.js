const fs = require('fs');

fs.stat('./观书有感.txt', (err, data) => {
    if(err) {
        console.log('读取失败');
        return;
    }
    console.log(data.isFile());
    console.log(data.isDirectory());
    
})