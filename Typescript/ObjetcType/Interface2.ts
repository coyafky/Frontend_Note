interface Person {
    name: string;
    age: number;
  }
   
  function greet3(person: Person) {
    return "Hello " + person.name;
  }