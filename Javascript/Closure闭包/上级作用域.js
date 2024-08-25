function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // innerFunction 可以访问 outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // 输出: I am from outer function
