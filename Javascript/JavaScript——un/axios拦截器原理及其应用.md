应用场景 请求拦截器用于在接口请求之前做的处理，比如为每个请求带上相应的参数（token，时间戳等）。 返回拦截器用于在接口返回之后做的处理，比如对返回的状态进行判断（token是否过期）。

拦截器的使用

在src目录下建立api文件夹

文件夹内建立axios.js文件，进行接口请求的初始化配置

import axios from 'axios'
let instance = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
//请求拦截器
instance.interceptors.request.use(config => { //拦截请求，做统一处理
    const token = "asdasdk"
    //在每个http header都加上token
    config.headers.authorization = token
    return config
}, err => {//失败
    return Promise.reject(err)
})
//响应拦截器
instance.interceptors.response.use(response => { //拦截响应，做统一处理
    if (response.data.code) {
        switch (response.data.code) {
            case 200:
                console.log("1111")
        }
    }
    return response
}, err => { //无响应时的处理
    return Promise.reject(err.response.status)
})
export default instance
在main.js中引入，并将其绑定到Vue原型上，设为全局，不用在每个页面重新引入

import instance from './api/axios'
Vue.prototype.$http = instance
页面使用

this.$http.get(url).then(r => console.log(r)).catch(err => console.log(err))
this.$http.post(url, params).then(r => console.log(r)).catch(err => console.log(err))
效果展示



axios拦截器实现原理剖析

axios接口请求内部流程


axios原理简化

function Axios(){
    this.interceptors = {
        //两个拦截器
        request: new interceptorsManner(),
        response: new interceptorsManner()
    }
}
//真正的请求
Axios.prototype.request = function(){
    let chain = [dispatchRequest, undefined];//这儿的undefined是为了补位，因为拦截器的返回有两个
    let promise = Promise.resolve();
    //将两个拦截器中的回调加入到chain数组中
    this.interceptors.request.handler.forEach((interceptor)=>{
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
    })
    this.interceptors.response.handler.forEach((interceptor)=>{
        chain.push(interceptor.fulfilled, interceptor.rejected);
    })
    while(chain.length){
        //promise.then的链式调用，下一个then中的chain为上一个中的返回值，每次会减去两个
        //这样就实现了在请求的时候，先去调用请求拦截器的内容，再去请求接口，返回之后再去执行响应拦截器的内容
        promise = promise.then(chain.shift(),chain.shift());
    }
}
function interceptorsManner(){
    this.handler = [];
}
interceptorsManner.prototype.use = function(fulfilled,rejected){
    //将成功与失败的回调push到handler中
    this.handler.push({
        fulfilled: fulfilled,
        rejected: rejected
    })
}
//类似方法批量注册,实现多种请求
util.forEach(["get","post","delete"],(methods)=>{
    Axios.prototype[methods] = function(url,config){
        return this.request(util.merge(config||{},{//合并
            method: methods,
            url: url
        }))
    }
})