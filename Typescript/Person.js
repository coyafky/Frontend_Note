// 定义一个名为 Person 的类
var Person = /** @class */ (function () {
    // 构造函数，用于初始化对象
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 定义一个方法，用于获取全名
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    // 定义一个方法，用于获取年龄
    Person.prototype.getAge = function () {
        return this.age;
    };
    // 定义一个方法，用于更新年龄
    Person.prototype.updateAge = function (newAge) {
        this.age = newAge;
    };
    return Person;
}());
// 创建 Person 类的实例
var person1 = new Person("John", "Doe", 30);
// 调用实例的方法
console.log(person1.getFullName()); // 输出: John Doe
console.log(person1.getAge()); // 输出: 30
// 更新年龄
person1.updateAge(31);
console.log(person1.getAge()); // 输出: 31
