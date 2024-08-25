class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  
    fetch() {
      console.log(`${this.name} fetches a ball.`);
    }
  }
  
  // 示例用法
  const animal = new Animal("Animal");
  animal.speak();  // 输出：Animal makes a sound.
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.speak();  // 输出：Buddy barks.
  dog.fetch();  // 输出：Buddy fetches a ball.
  