function deepEqual(obj1, obj2) {
    // 检查是否为相同类型
    if (typeof obj1 !== typeof obj2) return false;

    // 检查是否为基本数据类型或 null
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object') {
        return obj1 === obj2;
    }

    // 检查对象的属性数量是否相同
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    // 递归比较每个属性
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

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
let obj4 = {
    b: 2,
    a: 1
};
let obj5 = {
    a: 1,
    b: {
        c: 3
    }
};
let obj6 = {
    a: 1,
    b: {
        c: 3
    }
};

console.log(deepEqual(obj, obj2)); // true
console.log(deepEqual(obj, obj3)); // false
console.log(deepEqual(obj, obj4)); // true
console.log(deepEqual(obj5, obj6)); // true