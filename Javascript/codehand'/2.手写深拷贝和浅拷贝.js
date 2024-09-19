
function shallowClone(obj){
    if(!obj||typeof obj!=='object'){
        return obj
    }
    let cloneObj=Array.isArray(obj)?[]:{};

    Object.keys(obj).forEach(key=>{
       cloneObj[key]=obj[key]
    });
    return cloneObj
}

const obj1 ={
    name:"coya",
    arr: [1, [2, 3], 4],
}

const obj3 = shallowClone(obj1);
console.log(obj3); // { name: 'coya', arr: [ 1, [ 2, 3 ], 4 ] }
console.log(obj3===obj1); // false

obj3.name ="upadte";
console.log(obj1.name);
obj3.arr[1] = [5, 6, 7]; // 属性的引用类型，新旧对象还是共享同一块内存
console.log(obj1.arr); // [ 1, [ 5, 6, 7 ], 4 ]


console.log('obj1', obj1) // obj1 { name: 'init',  arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log('obj3', obj3) // obj3 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }


// 实现深拷贝

function deepClonePlus(obj){
    const hash = new WeakMap();
    if(!obj||typeof obj!=='object'){
        return obj
    }
    if(hash.has(obj)){
        return hash.get(obj)
    }
    let cloneObj=Array.isArray(obj)?[]:{};
    hash.set(obj,cloneObj);
    Object.keys(obj).forEach(key=>{
        cloneObj[key]=deepClonePlus(obj[key])
    });
    return cloneObj
}
let newObject = {
    name: 'shuaige',
    age: 12,
    boo: true,
    n: null,
    un: undefined,
    sy: Symbol('xx'),
    big: 10n,
    child: {
        ele: 'boby',
        x: 100
    },
    arr: [1, 2, 3],
    reg: /^\d+$/,
    fn: function () {
        console.log(this.name);
    },
    time: new Date(),
    err: new Error()
}
let newObjectClone = deepClonePlus(newObject)

newObject.loop = newObject//循环引用.
console.log(newObject);
console.log(newObjectClone);

