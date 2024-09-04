
let booleanObject = new  Boolean(true);


let  falseObject = new Boolean(false);

let reslut = falseObject&&true;
console.log(reslut);

let falseValue = false ;

reslut = falseValue&&true;
console.log(reslut);


// 原始值和引用值（Boolean对象）还有几个区别。首 先，typeof操作符对原始值返回"boolean"，但对引用值返回"object"。 同样，Boolean对象是Boolean类型的实例，在使用instaceof操作符时返 回true，但对原始值则返回false，如下所示：


console.log(typeof falseObject);
console.log(typeof falseValue);
console.log(falseObject instanceof Boolean);
console.log(falseValue instanceof Boolean);

// 原始布尔值和Boolean对象之间的区别
