let fs = require('fs');


module.exports ={
    index(res){
        fs.readFile('./index.html','utf-8',(err, data) => {
            if(err) {
                console.log('读取失败');
                return;
            }
            res.end(data);
        })
    }
}