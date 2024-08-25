function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById('downloadLink').setAttribute('href', '/download/' + file.name);
        document.getElementById('downloadLink').style.display = 'block';
    })
    .catch(error => console.error('文件上传失败', error));
}

// script.js

// 获取文件上传输入框
var fileInput = document.getElementById('fileInput');

// 监听文件选择事件
fileInput.addEventListener('change', function() {
    // 获取选择的文件
    var selectedFile = fileInput.files[0];
    // 获取文件名并显示在页面上
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.textContent = '下载文件: ' + selectedFile.name;
    downloadLink.href = '#';  // 设置下载链接为空，因为还没有实现下载功能
    downloadLink.style.display = 'block';  // 显示下载链接
});