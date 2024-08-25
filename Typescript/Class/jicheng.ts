// 定义父类 Person
class Person {
    constructor(private firstName: string, private lastName: string) {}
  
    // 获取全名
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // 描述信息
    describe(): string {
      return `This is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  // 定义子类 Employee，继承自 Person
  class Employee extends Person {
    constructor(
      firstName: string,
      lastName: string,
      private jobTitle: string
    ) {
      // 调用父类的构造函数
      super(firstName, lastName);
    }
  
    // 重写 describe 方法
    describe(): string {
      return super.describe() + ` I'm a ${this.jobTitle}.`;
    }
  }
  
  // 创建 Employee 类的实例
  let employee = new Employee('John', 'Doe', 'Web Developer');
  
  // 调用继承的方法和重写的方法
  console.log(employee.getFullName()); // 输出: John Doe
  console.log(employee.describe());    // 输出: This is John Doe. I'm a Web Developer.