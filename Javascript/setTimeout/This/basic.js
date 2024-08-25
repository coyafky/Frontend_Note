const myObject = {
    name: "My Object",
    sayHello: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  setTimeout(myObject.sayHello, 1000); // 输出 "Hello, my name is undefined"