function createPerson(name, age) {
    // 私有变量
    let _name = name;
    let _age = age;

    // 返回一个对象，包含公有方法
    return {
        getName: function() {
            return _name;
        },
        setName: function(newName) {
            _name = newName;
        },
        getAge: function() {
            return _age;
        },
        setAge: function(newAge) {
            if (newAge > 0) {
                _age = newAge;
            }
        }
    };
}

const person = createPerson("Alice", 30);

console.log(person.getName()); // 输出: Alice
console.log(person.getAge()); // 输出: 30

person.setName("Bob");
person.setAge(35);

console.log(person.getName()); // 输出: Bob
console.log(person.getAge()); // 输出: 35

// 尝试直接访问私有变量
console.log(person._name); // 输出: undefined
console.log(person._age); // 输出: undefined