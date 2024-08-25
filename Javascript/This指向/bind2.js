const obj = {
    name: 'Alice',
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const boundFunc = obj.sayHello.bind(obj);
  boundFunc(); // 输出：Hello, Alice!


  //改变函数的上下文：bind方法可以用来改变函数的执行上下文，即this的指向。当您想要确保函数在执行时具有特定的this值时，可以使用bind方法