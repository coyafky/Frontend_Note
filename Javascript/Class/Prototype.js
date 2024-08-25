const personPrototype = {
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  const person = Object.create(personPrototype);
  person.name = "John";
  person.age = 30;
  person.sayHello(); // logs "Hello, my name is John"
  