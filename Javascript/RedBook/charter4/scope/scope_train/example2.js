// 然执行上下文主要有全局上下文和函数上下文两种（eval()调用内部 存在第三种上下文），但有其他方式来增强作用域链。某些语句会导致 在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删 除。通常在两种情况下会出现这个现象，即代码执行到下面任意一种情 况时： try/catch语句的catch块 with语句

function buildUrl(){
    let qs ="?debug=true";

    with(location){
        let url = href +qs;
    }

    return url;
}

// with语句将location对象作为上下文，因此location会被添加到 作用域链前端。buildUrl()函数中定义了一个变量qs。当with语句中的 代码引用变量href时，实际上引用的是location.href，也就是自己变量 对象的属性。在引用qs时，引用的则是定义在buildUrl()中的那个变 量，它定义在函数上下文的变量对象上。而在with语句中使用var声明 的变量url会成为函数上下文的一部分，可以作为函数的值被返回；但 像这里使用let声明的变量url，因为被限制在块级作用域（稍后介 绍），所以在with块之外没有定义