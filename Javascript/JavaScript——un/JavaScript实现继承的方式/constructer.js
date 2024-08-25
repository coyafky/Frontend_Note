// 定义父类
function Animal(name) {
    this.name = name;
  }
  
  // 在父类的原型上添加方法
  Animal.prototype.sayName = function() {
    console.log('My name is ' + this.name);
  };
  
  // 定义子类
  function Dog(name, breed) {
    // 调用父类的构造函数，实现构造继承
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // 将子类的原型设置为父类的一个实例，实现原型继承
  Dog.prototype = Object.create(Animal.prototype);
  
  // 修复子类构造函数的指向
  Dog.prototype.constructor = Dog;
  
  // 在子类的原型上添加方法
  Dog.prototype.sayBreed = function() {
    console.log('My breed is ' + this.breed);
  };
  
  // 创建子类实例
  var myDog = new Dog('Buddy', 'Golden Retriever');
  
  // 调用继承的方法
  myDog.sayName(); // 输出: My name is Buddy
  myDog.sayBreed(); // 输出: My breed is Golden Retriever