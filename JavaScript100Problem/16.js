function findPerfectNumbers(limit) {
    let perfectNumbers = [];
    for (let number = 2; number <= limit; number++) {
        let factors = [1];
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                factors.push(i);
                if (i !== number / i) {
                    factors.push(number / i);
                }
            }
        }
        if (factors.reduce((sum, factor) => sum + factor, 0) === number) {
            perfectNumbers.push(number);
        }
    }
    return perfectNumbers;
}

// 找出1000以内的所有完数
let perfectNumbers = findPerfectNumbers(1000);
console.log("1000以内的完数有：", perfectNumbers);