
HTML5的离线储存原理：

用户在线时，保存更新用户机器上的缓存文件；当用户离线时，可以正常访离线储存问站点或应用内容
HTML5的离线储存使用：

在文档的 html 标签设置 manifest 属性，如 manifest="/offline.appcache"
在项目中新建 manifest 文件，manifest 文件的命名建议：xxx.appcache
在 web 服务器配置正确的 MIME-type，即 text/cache-manifest

浏览器是怎么对HTML5的离线储存资源进行管理和加载的？

在线的情况下，浏览器发现 html 标签有 manifest 属性，它会请求 manifest 文件
如果是第一次访问app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储
如果已经访问过app且资源已经离线存储了，浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作。如果文件改变了，那么就会重新下载文件中的资源并进行离线存储
离线的情况下，浏览器就直接使用离线存储的资源。
