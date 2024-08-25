interface Person {
    name: string;
    age: number;
}

let person: any = { name: "John", age: 30 };
let john = person as Person;