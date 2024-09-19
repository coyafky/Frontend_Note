function customPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then((value) => {
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// 验证样例
const p1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve('two'), 500));

customPromiseRace([p1, p2])
    .then((value) => {
        console.log(value); // 输出: 'two'
    })
    .catch((error) => {
        console.error(error);
    });