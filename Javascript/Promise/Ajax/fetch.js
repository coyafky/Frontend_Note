const fetchBUtton = document.getElementById('fetchButton');

fetchBUtton.addEventListener('click', function(){
    fetch('https://api.apiopen.top/getJoke')
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // 处理成功返回的数据
        document.getElementById('result').textContent = '请求成功: ' + JSON.stringify(data);
      })
      .catch(error => {
        // 处理请求过程中的错误
        document.getElementById('result').textContent = '请求失败: ' + error.message;
      });
});