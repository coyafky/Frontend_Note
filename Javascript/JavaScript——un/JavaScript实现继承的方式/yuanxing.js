// 定义一个父对象
let animal = {
    eat: function() {
      console.log("This animal is eating.");
    }
  };
  
  // 定义一个子对象，并将其原型设置为父对象
  let dog = Object.create(animal);
  
  // 子对象可以调用父对象的方法
  dog.eat(); // 输出: This animal is eating.
  
  // 子对象可以有自己的属性和方法
  dog.bark = function() {
    console.log("Woof!");
  };
  
  dog.bark(); // 输出: Woof!