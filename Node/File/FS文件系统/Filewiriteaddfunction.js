let fs = require ('fs');

fs.readFile('../File/text.txt', 'utf-8', (err, data) => {
    if(!err) {
        let  newdata = data+'666';
        fs.writeFile('../File/text.txt', newdata, err => {
            if(!err) {
                console.log('追加成功');
            }
        })
    }
})