// 定义一个名为 Person 的类
class Person {
    // 定义类的属性
    firstName: string;
    lastName: string;
    age: number;

    // 构造函数，用于初始化对象
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 定义一个方法，用于获取全名
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // 定义一个方法，用于获取年龄
    getAge(): number {
        return this.age;
    }

    // 定义一个方法，用于更新年龄
    updateAge(newAge: number): void {
        this.age = newAge;
    }
}

// 创建 Person 类的实例
const person1 = new Person("John", "Doe", 30);

// 调用实例的方法
console.log(person1.getFullName()); // 输出: John Doe
console.log(person1.getAge()); // 输出: 30

// 更新年龄
person1.updateAge(31);
console.log(person1.getAge()); // 输出: 31