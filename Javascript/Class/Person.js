class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let person = new Person("Kingsley");
console.log(person.getName()); // 输出 "Kingsley"
console.log(typeof person); // 输出 "object"

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true