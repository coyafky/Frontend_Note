Function.prototype.myCall = function (context) {
    var context = context || window
    // 给 context 添加一个属性
    // getValue.call(a, 'pp', '24') => a.fn = getValue
    context.fn = this
    // 将 context 后面的参数取出来
    var args = [...arguments].slice(1)
    // getValue.call(a, 'pp', '24') => a.fn('pp', '24')
    var result = context.fn(...args)
    // 删除 fn
    delete context.fn
    return result
  }