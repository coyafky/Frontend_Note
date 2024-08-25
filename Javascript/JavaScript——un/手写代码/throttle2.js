function throttle(func, delay){
    var timer = 0;
    return function(){
      var context = this;
      var args = arguments;
      if(timer) return // 当前有任务了，直接返回
      timer = setTimeout(function(){
        func.apply(context, args);
        timer = 0;
      },delay);
    }
  }