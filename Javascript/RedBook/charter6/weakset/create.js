const ws = new WeakSet();

const val1 ={id:1}
const val2 ={id:2}
const val3 ={id:3}

// 使用数组初始化弱集合

const ws1 = new WeakSet([val1,val2,val3]);

console.log(ws1.has(val1));
console.log(ws1.has(val2));
console.log(ws1.has(val3));




// 初始化是全有或全无的操作 
// 只要有一个值无效就会抛出错误，导致整个初始化失败


const ws2 = new WeakSet([val1,'wwww',val3]);
console.log(ws2);
console.log(typeof ws2);

// 原始值可以先包装成对象再用作值

const stringval = new String('val');
const  ws3 = new WeakSet([stringval]);
console.log(ws3.has(stringval));
