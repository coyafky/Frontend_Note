// 定义一个父对象
let animal = {
    name: "Generic Animal",
    eat: function() {
      console.log(this.name + " is eating.");
    }
  };
  
  // 定义一个子对象
  let dog = {};
  
  // 使用拷贝继承将父对象的属性和方法复制到子对象
  for (let prop in animal) {
    if (animal.hasOwnProperty(prop)) {
      dog[prop] = animal[prop];
    }
  }
  
  // 修改子对象的属性
  dog.name = "Buddy";
  
  // 调用继承的方法
  dog.eat(); // 输出: Buddy is eating.