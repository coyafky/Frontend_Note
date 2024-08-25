let obj = {
    a: 1,
    b: 2
};
let obj2 = {
    a: 1,
    b: 2
};
let obj3 = {
    a: 1,
    b: '2'
};


let str1 = JSON.stringify(obj);
let str2 = JSON.stringify(obj2);
let str3 = JSON.stringify(obj3);
console.log(str1 == str2);
console.log(str1 == str3);