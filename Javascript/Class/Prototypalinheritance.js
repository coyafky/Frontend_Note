// 定义父类
function Animal(name) {
    this.name = name;
  }
  
  // 为父类添加方法
  Animal.prototype.walk = function() {
    console.log(this.name + ' is walking.');
  };
  
  // 定义子类
  function Bird(name, canFly) {
    Animal.call(this, name); // 调用父类的构造函数
    this.canFly = canFly;
  }
  
  // 使用原型链实现继承
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird;
  
  // 为子类添加方法
  Bird.prototype.fly = function() {
    if (this.canFly) {
      console.log(this.name + ' is flying.');
    } else {
      console.log(this.name + ' cannot fly.');
    }
  };
  
  // 创建子类实例
  var sparrow = new Bird('Sparrow', true);
  sparrow.walk(); // 输出 Sparrow is walking.
  sparrow.fly(); // 输出 Sparrow is flying.