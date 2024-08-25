function createClosure() {
    let largeArray = new Array(1000000).fill('some data');
    let counter = 0;

    return function() {
        counter++;
        console.log(counter);
        // 解除对 largeArray 的引用
        largeArray = null;
    };
}

const closure = createClosure();

// 调用闭包函数
closure();
closure();