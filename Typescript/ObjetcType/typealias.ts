type Person2 = {
  name: string;
  age: number;
};

function greet(person: Person2) {
  return "Hello " + person.name;
}
