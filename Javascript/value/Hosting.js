function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // Error

// console.log(b); // Error
//             ^

// ReferenceError: b is not defined