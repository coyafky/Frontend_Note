const fs = require('fs');

// 读取文件

function readFilePromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })

}

readFilePromise('content.txt')
    .then((data) => {
        console.log('文件内容:', data);
    })
    .catch((err) => {
        console.error('读取文件失败:', err);
    })

    .finally(() => {

    })
