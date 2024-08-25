const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
};

const counter = createCounter();

setTimeout(counter, 1000); // 1秒后输出 1
setTimeout(counter, 2000); // 2秒后输出 2
