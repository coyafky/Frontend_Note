const fs = require('fs');

const rs = fs.ReadStream('./观书有感.txt');

rs.on('data',chunk =>{
    console.log(chunk.length);
    
})


rs.on('end', () => {
    console.log('读取完成');
    
})