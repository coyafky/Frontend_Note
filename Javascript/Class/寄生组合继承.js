// 父类
function SuperType (name) {
    this.colors = ["red", "blue", "green"];
    this.name = name; // 父类属性
  }
  SuperType.prototype.sayName = function () { // 父类原型方法
    return this.name;
  };
  
  // 子类
  function SubType (name, subName) {
    // 调用 SuperType 构造函数
    SuperType.call(this, name); // ----第二次调用 SuperType，继承实例属性----
    this.subName = subName;
  };
  
  // ----第一次调用 SuperType，继承原型属性----
  SubType.prototype = Object.create(SuperType.prototype)
  
  SubType.prototype.constructor = SubType; // 注意：增强对象
  
  let instance = new SubType('An', 'sisterAn')