let s1  = 'some text'
let s2 =s1.substring(2);

console.log(s2);

// s1的值是"some text"，s2的值是"me text"
// 相当于

// 以读模式访问字符串值的任何时候，后台都 会执行以下3步： (1) 创建一个String类型的实例； (2) 调用实例上的特定方法； (3) 销毁实例

let s3 = new String('some text');
let s4 = s3.substring(2);
s3=null;

// 引用类型与原始值包装类型的主要区别在于对象的生命周期。在通过 new实例化引用类型后，得到的实例会在离开作用域时被销毁，而自动 创建的原始值包装对象则只存在于访问它的那行代码执行期间。这意味 着不能在运行时给原始值添加属性和方法

let s5 ='some text';
s5.color ='red'
console.log(s5.color);
// s1添加了一个color属性。可是，第三行代码访问color属性时，它却不见了。原因就是第二行代码运行时会 临时创建一个String对象，而当第三行代码执行时，这个对象已经被销毁了。实际上，第三行代码在这里创建了自己的String对象，但这个对象没有color属性

// Object构造函数作为一个工厂方法，能够根据传入值的类型返回 相应原始值包装类型的实例
// 如果传给Object的是字符串，则会创建一个String的实例。如果是数 值，则会创建Number的实例。布尔值则会得到Boolean的实例
let obj = new Object('some text');
console.log(obj instanceof String);


let value = '25';
let number =  Number(value);
console.log(typeof number);
let obj2 = new Object(number);
console.log(typeof obj2);
// 变量number中保存的是一个值为25的原始数值，而变量 obj中保存的是一个Number的实例

