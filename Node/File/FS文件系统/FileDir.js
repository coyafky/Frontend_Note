const fs = require('fs');


// fs.mkdir('./html', err => {
//     if(err) {
//         console.log('创建失败');
//         return;
//     }
//     console.log('创建成功');
// })

// fs.mkdir('./a/b/c',{recursive: true}, err => {
//     if(err){
//         console.log('创建失败');
//         return 
//     }
//     console.log('创建成功');
    
// })


fs.readdir('./html', (err, files) => {
    if(err) {
        console.log('读取失败');
        return;
    }
    console.log(files);
})

fs.readdir('./',(err,data)=>{
    if(err){
        console.log('读取失败');
        return;
    }
    console.log(data);
    
})

fs.rmdir("./html", err => {
    if(err) {
        console.log('删除失败');
        return;
    }
    console.log('删除成功');
    
})

fs.rm('./a', {recursive: true},err => {
    if(err){
      console.log(err);
      return;
    }
    console.log('删除成功');
  });