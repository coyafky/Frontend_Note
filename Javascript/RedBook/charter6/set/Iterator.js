const s = new  Set(['val1','val2','val3']);
// 集合实例可以提供一个迭代器（Iterator），能以插入顺序生成集合内 容。可以通过values()方法及其别名方法keys()（或者Symbol.iterator 属性，它引用values()）取得这个迭代器
console.log(s.values === s[Symbol.iterator]);

console.log(s.keys === s[Symbol.iterator]);

for (const value of s) {
    console.log(value);
    
}



for (let value of s[Symbol.iterator]()) {
    console.log(value);
    
}

// values()是默认迭代器，所以可以直接对集合实例使用扩展操作



const s2 = new Set(['1','2','3']);

console.log([...s2]);

// 集合的entries()方法返回一个迭代器，可以按照插入顺序产生包含两 个元素的数组，这两个元素是集合中每个值的重复出现

const s3 = new Set(['1','2','3'])
for (let pair of s.entries){
    console.log(pair);
    
}

// 修改集合中值的属性不会影响其作为集合值的身份：
const s1 = new Set(["val1"]); // 字符串原始值作为值不会被修改
for (let value of s1.values()) {
    value = "newVal"; 
    console.log(value); // newVal 
    console.log(s1.has("val1")); // true 
} 

const valObj = {id: 1}; 
const s4 = new Set([valObj]); // 修改值对象的属性，但对象仍然存在于集合中 
for (let value of s4.values()) { 
    value.id = "newVal"; 
    console.log(value); // {id: "newVal"} 
    console.log(s4.has(valObj)); // true 
} 
console.log(valObj); // id: "newVal"

