function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
const add10 = createAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12