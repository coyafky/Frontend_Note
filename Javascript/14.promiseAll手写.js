function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// 验证样例
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve(3), 500));

customPromiseAll([p1, p2, p3])
    .then((values) => {
        console.log(values); // 输出: [1, 2, 3]
    })
    .catch((error) => {
        console.error(error);
    });