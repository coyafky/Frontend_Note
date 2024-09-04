const ws = new WeakSet();
const val1 = {id:1}
const val2 ={id:2}
const val3 ={id:3}
console.log(ws.has(val1)); //false

ws.add(val1);
ws.add(val2);
console.log(ws.has(val1));
console.log(ws.has(val2));

ws.delete(val1)
console.log(ws.has(val1));
console.log(ws.has(val2));

// add()方法返回弱集合实例，因此可以把多个操作连缀起来，包括初始 化声明

ws.add(val1).add(val3)
console.log(ws);
