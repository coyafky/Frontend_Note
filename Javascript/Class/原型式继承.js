// 父类
function SuperType (name) {
    this.colors = ["red", "blue", "green"];
    this.name = name; // 父类属性
  }
  SuperType.prototype.sayName = function () { // 父类原型方法
    return this.name;
  };
  
  /** 第一步 */
  // 子类，通过 call 继承父类的实例属性和方法，不能继承原型属性/方法
  function SubType (name, subName) {
    SuperType.call(this, name); // 调用 SuperType 的构造函数，并向其传参 
    this.subName = subName;
  }
  
  /** 第二步 */
  // 解决 call 无法继承父类原型属性/方法的问题
  // Object.create 方法接受传入一个作为新创建对象的原型的对象，创建一个拥有指定原型和若干个指定属性的对象
  // 通过这种方法指定的任何属性都会覆盖原型对象上的同名属性
  SubType.prototype = Object.create(SuperType.prototype, { 
    constructor: { // 注意指定 SubType.prototype.constructor = SubType
      value: SubType,
      enumerable: false,
      writable: true,
      configurable: true
    },
    run : { 
      value: function(){ // override
        SuperType.prototype.run.apply(this, arguments); 
            // call super
            // ...
      },
      enumerable: true,
      configurable: true, 
      writable: true
    }
  }) 
  
  /** 第三步 */
  // 最后：解决 SubType.prototype.constructor === SuperType 的问题
  // 这里，在上一步已经指定，这里不需要再操作
  // SubType.prototype.constructor = SubType;
  
  var instance = new SubType('An', 'sistenAn')